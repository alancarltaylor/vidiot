(function() {
  'use strict';

  angular.module('vidiot')
  .directive('layoutDirective', layoutDirective)

  function layoutDirective (){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/templates/layout-directive.html',
      controller: 'LayoutController'
    }
  }

}());
