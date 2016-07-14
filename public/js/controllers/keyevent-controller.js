(function() {
  'use strict';

  angular.module('vidiot')


  .controller('keyevent', function($scope, $rootScope){

    $scope.keyStuff = function(e){
      if (e.which == 39) {
        $rootScope.$broadcast("right-arrow", "right")
      } else if (e.which == 37){
        $rootScope.$broadcast("left-arrow", "left")
      }
    }
  })

}());
