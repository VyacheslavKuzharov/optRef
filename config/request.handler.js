module.exports = function (ngModule) {
    ngModule.factory('requestHandler', requestHandler);

    function requestHandler($rootScope) {

        return {
            sendBaseUrl: sendBaseUrl,
            targetObj: targetObj
        };

        function sendBaseUrl(resourceType){
            var type = (resourceType === 'source') ? '/usersource' : '/usertracker';
            return $rootScope.globalParams.defaultHost + type
        }

        function targetObj(resourceType, resource, method){
            var obj = {
                host: resource.host,
                login: resource.login,
                password: resource.password,
                apiLogin: resource.apiLogin,
                apiPassword: resource.apiPassword,
                isActive: true
            };

            switch (resourceType) {
                case 'source':
                    obj.apiKey = resource.apiKey;
                    if(method === 'post') obj.source = {id: resource.source};
                    break;
                case 'tracker':
                    obj.apiHash = resource.apiKey;
                    if(method === 'post') obj.tracker = {id: resource.source};
                    break;
            }
            return obj;
        }
    }
};