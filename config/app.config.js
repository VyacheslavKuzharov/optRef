module.exports = function (ngModule) {
    ngModule
        .constant('CONFIG',
            {
                APIHost: 'http://localhost/api/'
            }
        ).run(detectHost);

    function detectHost($rootScope, $location, $state, $stateParams, SessionService, authService) {
        $rootScope.globalParams = {
            defaultHost: $location.protocol() + '://' + $location.host() + ':3000' + '/api',
            isAuth: authService.isAuth()
        };


        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.token = null;

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                SessionService.checkAccess(event, toState, toParams, fromState, fromParams);
            }
        );
    }
};