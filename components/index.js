module.exports = function (ngModule) {

    // Auth components
    require('../assets/stylesheets/login.scss');
    require('./auth/auth.ctrl')(ngModule);
    require('./auth/auth.service')(ngModule);
    require('./auth/compare.directive')(ngModule);
    require('./auth/session.service')(ngModule);

    // Toolbar components
    require('../assets/stylesheets/toolbar.scss');
    require('./toolbar/toolbar.directive')(ngModule);

    // Dashboard components
    require('./dashboard/dashboard.ctrl')(ngModule);
    // require('../assets/stylesheets/dashboard.scss')(ngModule);


    // Form fields
    require('./forms/resourceFields')(ngModule);


    // Resources components
    require('../assets/stylesheets/source.scss');
    require('./resources/resources.ctrl')(ngModule);
    require('./resources/resource.service')(ngModule);
    require('./resources/new/resources.new.ctrl')(ngModule);
    require('./resources/edit/resource.edit.ctrl')(ngModule);
    require('./resources/delete/resource.del.ctrl')(ngModule);



};