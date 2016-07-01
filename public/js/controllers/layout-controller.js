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
    $scope.sortType = "top.json?sort=top&t=week"
    $scope.sub = "/r/videos"
    $scope.getPlaylist = function(sort, sub) {
      PlaylistService.getPlaylist(sort, sub)
      .then(function(videos) {

        $scope.playlist = videos.data.data.children.reduce(function(outputArr, curr){
          if (curr.data.media_embed.content){
          outputArr.push(_.unescape(curr.data.media_embed.content))
        }
          return outputArr;
        }, []);

        $scope.sortType = sort;
        $scope.sub = sub;

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
    }
    $scope.getPlaylist($scope.sortType, $scope.sub);

    $scope.trustHtml = function(src) {
      return $sce.trustAsHtml(src);
    }

    $scope.menuClicked = function(){
      $scope.hideNav = !$scope.hideNav;
    }

  }

}());
