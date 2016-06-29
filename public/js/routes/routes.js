(function() {
  'use strict';

  angular.module('vidiot')
  .config(routes)

  routes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ]

  function routes($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('layout', {
      url: '/',
      template: '<layout-directive></layout-directive>'
    })

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

  }

}());
