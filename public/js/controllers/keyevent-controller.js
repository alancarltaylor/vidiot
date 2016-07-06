(function() {
  'use strict';

  angular.module('vidiot')


  .controller('keyevent', function($scope, $rootScope){
    console.log("In Temp Controller");

    $scope.keyStuff = function(e){


      if (e.which == 39) {
        console.log("you pushed the right arrow")
        $rootScope.$broadcast("right-arrow", "right")
      } else if (e.which == 37){
        console.log("you pushed the left arrow")
        $rootScope.$broadcast("left-arrow", "left")

      } else if (e.which == 70){
        //console.log("you pushed 'f'")
        //Fullscreen.all()
        // $rootScope.$broadcast("f", "f")

      } else if (e.which == 32){
        console.log("you pushed the spacebar")
        $rootScope.$broadcast("spacebar", "spacebar")

      }



    }
  })

}());
