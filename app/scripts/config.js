'use strict';

/**
 * @ngdoc overview
 * @name demoProjectApp
 * @description
 * # demoProjectApp
 *
 * Main module of the application.
 */
var demoProjectApp = angular
  .module('demoProjectApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datatables'
  ]);
  demoProjectApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/listing', {
        templateUrl: 'views/listing.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

