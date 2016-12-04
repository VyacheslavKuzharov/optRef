module.exports = function (ngModule) {
    ngModule.directive('toolbar', toolbar);

    function toolbar() {
        return {
            template: require('./toolbar.tpl.html') ,
            controller: toolbarController,
            controllerAs: 'toolbarCtrl'
        };

        function toolbarController($state, $rootScope, authService, store) {
            var self = this;
            self.logout = logout;
            self.isCollapsed = true;

            function logout() {
                store.remove('token');

                authService.logout().then(function () {
                    $state.go('login');
                    $rootScope.globalParams.isAuth = false;
                });
            }
        }
    }
};