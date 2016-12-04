module.exports = function (ngModule) {
    ngModule.factory('Resource', Resource);

    function Resource($http, $rootScope, requestHandler) {
        return {
            getUserResources: getUserResources,
            getList: getList,
            create: create,
            update: update,
            destroy: destroy,
            disable: disable,
            getdash: getdash
        };

        function getUserResources(resourceType) {
            return  $http.get(requestHandler.sendBaseUrl(resourceType))
        }

        function getList(resourceType) {
            var type = (resourceType === 'source') ? '/source' : '/ttracker';
            return  $http.get($rootScope.globalParams.defaultHost + type)
        }

        function create(resourceType, resource) {
            return $http.post(requestHandler.sendBaseUrl(resourceType),
                requestHandler.targetObj(resourceType, resource, 'post')
            )
        }

        function update(resourceType, resource){
            return $http.put(requestHandler.sendBaseUrl(resourceType) + '/' + resource.id + '/',
                requestHandler.targetObj(resourceType, resource, 'put')
            )
        }

        function destroy(resourceType, resourceId) {
            return  $http.delete(requestHandler.sendBaseUrl(resourceType) + '/' + resourceId, {},
                {headers: {'Content-Type': 'application/json' , 'Accept': 'application/json'}}
            )
        }

        function disable(resource, resourceType, isActive) {
            return $http.put(requestHandler.sendBaseUrl(resourceType) + '/' + resource.id + '/',
                {
                    isActive: isActive
                })
        }

        function getdash(id){
            return  $http.get($rootScope.globalParams.defaultHost + '/usersource/' + id + '/dashboard')
        }


    }
};