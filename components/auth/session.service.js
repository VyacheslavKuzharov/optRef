module.exports = function (ngModule) {
    ngModule.service('SessionService', SessionService);

    function SessionService($injector, $rootScope, store) {
        "use strict";

        this.checkAccess = function(event, toState, toParams, fromState, fromParams) {
            var $scope = $injector.get('$rootScope'),
                token = store.get('token');

            if (toState.name === 'login')
                $rootScope.globalParams.isAuth = false;

            if (toState.data !== undefined) {
                if (toState.data.noLogin !== undefined && toState.data.noLogin) {
                    // code for not auth page
                }
            } else {
                if (token) {
                    $scope.$root.token = token;
                } else {
                    event.preventDefault();
                    $scope.$state.go('login');
                }
            }
        };

    }
};