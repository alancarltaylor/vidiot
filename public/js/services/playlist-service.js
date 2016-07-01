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
      if (sortType === "new.json" || sortType === "hot.json"){
        console.log("new sortType, not top");
        return $http.get('https://www.reddit.com'+sub+'/'+sortType);
      } else {
        return $http.get('https://www.reddit.com'+sub+'/'+sortType+"&limit=100");
    }
  }

  }




}());
