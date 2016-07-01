(function() {
  'use strict';

  angular.module('vidiot')
  .service('PlaylistService', PlaylistService)

  PlaylistService.$inject = [
    '$http'
  ]

  function PlaylistService($http){

    this.getPlaylist = function(sortType, sub){
      console.log("sub: ", sub);
      console.log("sortType: ", sortType);
      return $http.get('https://www.reddit.com'+sub+'/'+sortType);
    }

  }




}());
