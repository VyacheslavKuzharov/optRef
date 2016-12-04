module.exports = function (ngModule) {
    ngModule.controller('resourcesController', resourcesController);

    function resourcesController($rootScope, $stateParams, $scope, $state, $uibModal, $document, $window, Resource, Notification) {

        var self = this,
            resourceType = $stateParams.resource;
        $rootScope.globalParams.isAuth = true;
        self.getName = getName;
        self.editResource = editResource;
        self.removeResource = removeResource;
        self.disableResource = disableResource;

        function getName(resource){
            if(resourceType === 'source')
                return resource.source.name;
            else
                return resource.tracker.name;
        }


        // Hide/Show action tools on hover
        $scope.hoverIn = function(){
            this.hoverEdit = true;
        };

        $scope.hoverOut = function(){
            this.hoverEdit = false;
        };

        // Push new source to User Sources
        $scope.$on('newResource', function (event, resource) {
            Resource.create(resourceType, resource).then(function (response) {
                if(response.statusText === 'Created'){
                    self.userResources.push(response.data.data);

                    if (response.data.isVerified)
                        Notification.success({message: response.data.data.source.name + ' successfully added'} );
                    else
                        Notification.warning({message: response.data.data.source.name + ' successfully added. Invalid API-Key'} );
                }
                $window.scrollTo(0, 0);
            });
        });

        // Get all User Sources
        Resource.getUserResources(resourceType).then(function (response) {
            self.userResources = response.data.data;
        });


        function editResource(resource){
            $state.go('resource.edit', {
                id: resource.id,
                resourceAttr: resource,
                resource: resourceType
            });
        }

        function removeResource(resource) {

            $uibModal.open({
                animation: true,
                template: require('./delete/resource.del.tpl.html'),
                size: 'sm',
                controller: 'deleteResourceController',
                controllerAs: 'delCtrl',
                resolve: {
                    data: function () {
                        return {
                            resource: resource,
                            resources: self.userResources
                        }
                    }
                }
            });
            $document.find('body').css('padding-right', '0px');
        }

        function disableResource(resource, isActive) {
            Resource.disable(resource, resourceType, isActive).then(function (response) {
                _.extend(_.findWhere(self.userResources, { id: response.data.id }), response.data);
                var status = response.data.isActive ? 'on' : 'off';
                Notification.success({message: response.data.source.name + '(' + response.data.name + ')' +  ' turned ' + status} );
            })
        }
    }
};