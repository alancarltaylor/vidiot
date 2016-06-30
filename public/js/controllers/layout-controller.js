(function() {
  'use strict';

  angular.module('vidiot')
  .controller('LayoutController', LayoutController)

  LayoutController.$inject = [
    '$scope',
    'PlaylistService',
    '$sce'
  ]

  function LayoutController($scope, PlaylistService, $sce){
    $scope.hideNav = true;
    $scope.sortType = "search.json?q=%28and+timestamp%3A1325376000..1328054400+title%3A%27%27%29&sort=top&restrict_sr=on&syntax=cloudsearch"
    $scope.getPlaylist = function(val) {
      console.log('CALLED GET PLAYLIST', val);
      PlaylistService.getPlaylist(val)
      .then(function(videos) {

        $scope.playlist = videos.data.data.children.reduce(function(outputArr, curr){
          outputArr.push(_.unescape(curr.data.media_embed.content))
          return outputArr;
        }, []);
        $scope.nowPlaying = $scope.playlist[0]

        $scope.thumbnails = videos.data.data.children.reduce(function(outputArr, curr){
          if (curr.data.media){
            curr.data.media.oembed.html = _.unescape(curr.data.media.oembed.html)
            outputArr.push(curr.data.media.oembed)
          }
            return outputArr;
        }, []);

      })
    }
    $scope.switchVideo = function(thumbnail){
      $scope.nowPlaying = thumbnail.html;
      console.log("clicked thumbnail: ", thumbnail);
    }
    $scope.getPlaylist($scope.sortType);

    $scope.trustHtml = function(src) {
      return $sce.trustAsHtml(src);
    }

    $scope.menuClicked = function(){
      $scope.hideNav = !$scope.hideNav;
    }

  }

}());
