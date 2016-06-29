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
    $scope.test = "Hello World"
    PlaylistService.getPlaylist()
    .then(function(videos) {

      $scope.playlist = videos.data.data.children.reduce(function(outputArr, curr){
        outputArr.push(_.unescape(curr.data.media_embed.content))
        return outputArr;
      }, []);
    })

    $scope.trustHtml = function(src) {
      return $sce.trustAsHtml(src);
    }

  }

}());
