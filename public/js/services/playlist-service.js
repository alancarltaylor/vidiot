(function() {
  'use strict';

  angular.module('vidiot')
  .service('PlaylistService', PlaylistService)

  PlaylistService.$inject = [
    '$http'
  ]

  function PlaylistService($http){

    this.getPlaylist = function(){
      return $http.get('https://www.reddit.com/r/videos/search.json?q=%28and+timestamp%3A1325376000..1328054400+title%3A%27%27%29&sort=top&restrict_sr=on&syntax=cloudsearch');
    }

  }




}());
