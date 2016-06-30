(function() {
  'use strict';

  angular.module('vidiot')
  .service('PlaylistService', PlaylistService)

  PlaylistService.$inject = [
    '$http'
  ]

  function PlaylistService($http){

    this.getPlaylist = function(sortType){
      return $http.get('https://www.reddit.com/r/videos/'+sortType);
    }

  }




}());
