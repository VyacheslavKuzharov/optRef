module.exports = function (ngModule) {
    ngModule.directive('compareTo', compareTo);

    function compareTo() {
        return {
            require: "ngModel",
            scope: {
                passwordValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.passwordValue;
                };

                scope.$watch("passwordValue", function() {
                    ngModel.$validate();
                });
            }
        };
    }
};