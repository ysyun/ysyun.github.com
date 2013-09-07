'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/intro', {templateUrl: 'partials/intro.html', controller: GenericViewCtrl});
    $routeProvider.when('/smartdashboard', {templateUrl: 'partials/smartdashboard.html', controller: GenericViewCtrl});
    $routeProvider.when('/edashboard', {templateUrl: 'partials/edashboard.html', controller: GenericViewCtrl});
    $routeProvider.when('/pharosjava', {templateUrl: 'partials/pharosjava.html', controller: GenericViewCtrl});
    $routeProvider.when('/project_b', {templateUrl: 'partials/project_b.html', controller: GenericViewCtrl});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: ContactViewCtrl});
    $routeProvider.when('/imprint', {templateUrl: 'partials/imprint.html', controller: GenericViewCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
