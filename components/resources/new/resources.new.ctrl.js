module.exports = function (ngModule) {
    ngModule.controller('newResourceController', newResourceController);

    function newResourceController($state, $stateParams, $scope, resourceFields, Resource) {

        var self = this;
        self.addNewResource = addNewResource;
        self.formTitle = ($stateParams.resource === 'source') ? 'Add new Mobile User Source' : 'Add Tracker';

        // Get list available resources
        Resource.getList($stateParams.resource).then(function (response) {
            if($stateParams.resource === 'source')
                self.resourceFields = resourceFields.trafficSource(response.data.data);
            else
                self.resourceFields = resourceFields.tracker(response.data.data);
        });

        // Add new source to user
        function addNewResource(resource){
            if(resource){
                $scope.$emit('newResource', resource);
                $state.go('resource');
            }
        }

    }
};