module.exports = function (ngModule) {

    ngModule
        .config(configs);

        configs.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider', 'formlyConfigProvider', 'jwtOptionsProvider'];

        function configs($stateProvider, $httpProvider, $urlRouterProvider, formlyConfigProvider, jwtOptionsProvider){
            $urlRouterProvider.otherwise('/login');

            // Router
            $stateProvider
                .state('login', {
                    url: '/login',
                    template: require('../components/auth/templates/login.tpl.html'),
                    controller: 'authController',
                    controllerAs: 'authCtrl',
                    data: {
                        'noLogin': true
                    }
                })
                .state('register', {
                    url: '/register',
                    template: require('../components/auth/templates/register.tpl.html'),
                    controller: 'authController',
                    controllerAs: 'authCtrl',
                    data: {
                        'noLogin': true
                    }
                })
                .state('dashboard', {
                    url: '/dashboard',
                    template: require('../components/dashboard/dashboard.tpl.html'),
                    controller: 'dashboardController',
                    controllerAs: 'boardCtrl'
                })
                .state('resource', {
                    url: '/dashboard/{resource}',
                    template: require('../components/resources/resources.tpl.html'),
                    controller: 'resourcesController',
                    controllerAs: 'resourcesCtrl'
                })
                .state('resource.new', {
                    url: '/new',
                    template: require('../components/resources/new/resource.new.tpl.html'),
                    controller: 'newResourceController',
                    controllerAs: 'newRsrcCtrl'
                })
                .state('resource.edit', {
                    url: '/:id/edit',
                    template: require('../components/resources/edit/resource.edit.tpl.html'),
                    controller: 'editResourceController',
                    controllerAs: 'editRsrcCtrl',
                    params: {
                        resourceAttr: null
                    }
                });


            // Angular formly

            // custom configuration for the formly templates
            formlyConfigProvider.setWrapper({
                name: 'horizontalBootstrapLabel',
                template: [
                    '<label for="{{::id}}" class="col-sm-4 control-label">',
                    '{{to.label}}  {{to.required ? "*" : ""}}',
                    '</label>',
                    '<div class="col-sm-8">',
                    '<formly-transclude></formly-transclude>',
                    '</div>'
                ].join(' ')
            });

            // horizontal inputs
            formlyConfigProvider.setType({
                name: 'horizontalInput',
                extends: 'input',
                wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
            });

            // horizontal selects
            formlyConfigProvider.setType({
                name: 'horizontalSelect',
                extends: 'select',
                wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
            });

            // Angular JWT

            jwtOptionsProvider.config({
                tokenGetter: function (store) {
                    return store.get('token');
                },
                whiteListedDomains: ['optimizer.dev.sg.umbrella-web.com', 'localhost']
        });

            $httpProvider.interceptors.push('jwtInterceptor');

        }

};