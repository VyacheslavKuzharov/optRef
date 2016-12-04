module.exports = function (ngModule) {
    ngModule.controller('dashboardController', dashboardController);

    function dashboardController($rootScope, Resource) {

        var self = this;
        $rootScope.globalParams.isAuth = true;

        // Get all User Sources
        Resource.getUserResources('source').then(function (response) {
            self.userResources = response.data;
            angular.forEach(self.userResources, function (item) {
                Resource.getdash(item.id).then(function (response) {
                    item.dash = response.data
                });
            });
            return self.userResources
        });
    }
};