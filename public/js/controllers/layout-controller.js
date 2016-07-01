(function() {
  'use strict';

  angular.module('vidiot')
  .controller('LayoutController', LayoutController)

  LayoutController.$inject = [
    '$scope',
    'PlaylistService',
    '$sce',
    '$log'
  ]

  function LayoutController($scope, PlaylistService, $sce, $log){
    $scope.domains =  [
        '5min.com', 'abcnews.go.com', 'animal.discovery.com', 'animoto.com', 'atom.com',
        'bambuser.com', 'bigthink.com', 'blip.tv', 'break.com',
        'cbsnews.com', 'cnbc.com', 'cnn.com', 'colbertnation.com', 'collegehumor.com',
        'comedycentral.com', 'crackle.com', 'dailymotion.com', 'dsc.discovery.com', 'discovery.com',
        'dotsub.com', 'edition.cnn.com', 'escapistmagazine.com', 'espn.go.com',
        'fancast.com', 'flickr.com', 'fora.tv', 'foxsports.com',
        'funnyordie.com', 'gametrailers.com', 'godtube.com', 'howcast.com', 'hulu.com',
        'justin.tv', 'kinomap.com', 'koldcast.tv', 'liveleak.com', 'livestream.com',
        'mediamatters.org', 'metacafe.com', 'money.cnn.com',
        'movies.yahoo.com', 'msnbc.com', 'nfb.ca', 'nzonscreen.com',
        'overstream.net', 'photobucket.com', 'qik.com', 'redux.com',
        'revision3.com', 'revver.com', 'schooltube.com',
        'screencast.com', 'screenr.com', 'sendables.jibjab.com',
        'spike.com', 'teachertube.com', 'techcrunch.tv', 'ted.com',
        'thedailyshow.com', 'theonion.com', 'traileraddict.com', 'trailerspy.com',
        'trutv.com', 'twitvid.com', 'ustream.com', 'viddler.com', 'video.google.com',
        'video.nationalgeographic.com', 'video.pbs.org', 'video.yahoo.com', 'vids.myspace.com', 'vimeo.com',
        'wordpress.tv', 'worldstarhiphop.com', 'xtranormal.com',
        'youtube.com', 'youtu.be', 'zapiks.com'
        ]
    $scope.hideNav = true;
    $scope.sortType = "top.json?sort=top&t=week"
    $scope.sub = "/r/videos"
    $scope.getPlaylist = function(sort, sub) {
      $scope.nowPlaying = null;
      PlaylistService.getPlaylist(sort, sub)
      .then(function(videos) {

        $scope.sortType = sort;
        $scope.sub = sub;


        $scope.thumbnails = videos.data.data.children.reduce(function(outputArr, curr){
          if (curr.data.media && $scope.domains.indexOf(curr.data.domain) !== -1){
            curr.data.media.oembed.html = _.unescape(curr.data.media.oembed.html)
            outputArr.push(curr.data.media.oembed)
          }
            return outputArr;
        }, []);

        $scope.nowPlaying = $scope.thumbnails[0].html
        console.log("thumbnails: ", $scope.thumbnails);
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
