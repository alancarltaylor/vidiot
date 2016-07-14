(function() {
  'use strict';

  angular.module('vidiot')
  .service('PlaylistService', PlaylistService)

  PlaylistService.$inject = [
    '$http'
  ]

  function PlaylistService($http){
    //This function gets the json object from reddit, right before it is rendered by Reddit.
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
