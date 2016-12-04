var angular = require('angular'),
    uiRouter = require('angular-ui-router'),
    ngMessages = require('angular-messages'),
    storage = require('angular-storage'),
    jwt = require('angular-jwt'),
    angularUi = require('angular-ui-bootstrap'),
    formly = require('angular-formly'),
    formlyBootstrap = require('angular-formly-templates-bootstrap'),
    notify = require('angular-ui-notification');


var ngModule = angular.module('ngOptimizer', [
    uiRouter,
    ngMessages,
    storage,
    jwt,
    angularUi,
    formly,
    formlyBootstrap,
    notify
]);

require('./config')(ngModule);
require('./components')(ngModule);