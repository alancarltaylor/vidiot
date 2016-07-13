(function() {
  'use strict';

  angular.module('vidiot')
  .service('PlaylistService', PlaylistService)

  PlaylistService.$inject = [
    '$http'
  ]

  function PlaylistService($http){

    this.getPlaylist = function(sortType, sub){

      if (sortType === "new.json" || sortType === "hot.json"){
        return $http.get('https://www.reddit.com'+sub+'/'+sortType);
      } else {
        return $http.get('https://www.reddit.com'+sub+'/'+sortType+"&limit=100").then(function(data){
          return data;
        },
        function(){
        return "subError";
        })
      }
  }





}





}());
