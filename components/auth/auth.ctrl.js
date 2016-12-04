module.exports = function (ngModule) {
    ngModule.controller('authController', authController);

    function authController($state, authService, store) {

        var self = this;
        self.authSubmit = authSubmit;

        function authSubmit(user_credentials, authType) {

            authService.accessUser(user_credentials, authType).then(function (response) {
                store.set('token', response.data.data.jwt);
                $state.go('dashboard')
            }, function (response) {
                var errMessage = response.data;

                if (authType.isLogin){
                    self.authErrorMsg = errMessage.message;
                } else {

                    if (errMessage.raw){
                        self.authErrorMsg = authService.getErrMessage(errMessage.raw)
                    } else {
                        var err = errMessage.invalidAttributes;
                        self.authErrorMsg = err.email ? err.email[0].message : err.username[0].message
                    }
                }
                self.showError = true;
            })
        }
    }
};