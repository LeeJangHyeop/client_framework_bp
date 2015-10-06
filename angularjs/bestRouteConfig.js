/*
 *  BestRouteConfig v1.0.0
 *  powerfirebat@gmail.com
 */
(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'best.html',
        controller: 'BestController',
        controllerAs: 'vm'
      });
  }
})();
