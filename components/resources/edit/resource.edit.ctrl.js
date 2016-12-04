module.exports = function (ngModule) {
    ngModule.controller('editResourceController', editResourceController);

    function editResourceController($state, $stateParams, Resource, resourceFields, Notification) {

        var self = this;
        self.resource = $state.params.resourceAttr;
        self.isDisabled = false;
        self.saveEditResource = saveEditResource;

        if($stateParams.resource === 'source')
            self.resourceFields = resourceFields.trafficSource(false);
        else
            self.resourceFields = resourceFields.tracker(false);


        function saveEditResource(resource){
            self.isDisabled = true;
            Resource.update($stateParams.resource, resource).then(function (response) {
                if(response.status === 200)
                    $state.go('resource');
                    Notification.success({message: response.data.source.name + ' successfully changed'} );

            }, function (response) {
                Notification.danger({message: response.data });
            })
        }
    }
};