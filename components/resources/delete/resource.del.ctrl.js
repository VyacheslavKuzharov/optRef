module.exports = function (ngModule) {
    ngModule.controller('deleteResourceController', deleteResourceController);

    function deleteResourceController($uibModalInstance, $stateParams, Resource, Notification, data) {

        var self = this;
        self.isDisabled = false;
        self.removeUsrSrc = removeUsrSrc;
        self.cancel = cancel;

        function removeUsrSrc() {
            self.isDisabled = true;
            Resource.destroy($stateParams.resource, data.resource.id).then(function (response) {
                if(response.status === 200)
                    var index = data.sources.indexOf(data.resource);
                    data.resources.splice(index, 1);
                    Notification.success({message: data.resource.name + ' successfully deleted'} );
                    $uibModalInstance.close();
            })
        }


        function cancel() {
            $uibModalInstance.close();
        }

    }
};