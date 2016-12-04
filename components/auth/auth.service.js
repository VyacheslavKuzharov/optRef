module.exports = function (ngModule) {
    ngModule.factory('authService', authService);

    function authService($rootScope, $window, $http, store, jwtHelper) {
        return {
            accessUser: accessUser,
            logout: logout,
            isAuth: isAuth,
            currentUser: currentUser,
            getErrMessage: getErrMessage
        };

        function accessUser(user_credentials, authType) {
            console.log(user_credentials)
            return $http.post($rootScope.globalParams.defaultHost + (authType.isLogin ?  'auth/local' : 'auth/local/register'),
                user_credentials
            )
        }

        function logout() {
            return $http.post($rootScope.globalParams.defaultHost + 'auth/logout', {},
                {headers: {'Content-Type': 'application/json' , 'Accept': 'application/json'}}
            )
        }

        function isAuth() {
            var token = store.get('token');
            // A token is present
            if (token) {
                // Token with a valid JWT format XXX.YYY.ZZZ
                if (token.split('.').length === 3) {
                    // Could be a valid JWT or an access token with the same format
                    try {
                        var base64Url = token.split('.')[1];
                        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                        var exp = JSON.parse($window.atob(base64)).exp;
                        // JWT with an optonal expiration claims
                        if (exp) {
                            var isExpired = Math.round(new Date().getTime() / 1000) >= exp;
                            if (isExpired) {
                                // FAIL: Expired token
                                return false;
                            } else {
                                // PASS: Non-expired token
                                return true;
                            }
                        }
                    } catch(e) {
                        // PASS: Non-JWT token that looks like JWT
                        return true;
                    }
                }
                // PASS: All other tokens
                return true;
            }
            // FAIL: No token at all
            return false;
        }

        function currentUser() {
            var token = store.get('token');

            if(token){
                return jwtHelper.decodeToken(token);
            } else{
                return false
            }
        }


        function getErrMessage(rawObj) {
            var serverErr = rawObj[0].message;
            return serverErr.split(':')[1] ? 'Invalid input:' + serverErr.split(':')[1] : serverErr;
        }
    }
};