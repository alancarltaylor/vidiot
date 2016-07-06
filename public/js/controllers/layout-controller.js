(function() {
  'use strict';

  angular.module('vidiot')

  .controller('LayoutController', LayoutController)

  LayoutController.$inject = [
    '$scope',
    'PlaylistService',
    '$sce',
    '$log',
    '$rootScope',
    '$localStorage'

  ]

  function LayoutController($scope, PlaylistService, $sce, $log, $rootScope, $localStorage){

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
    $scope.defunctUrls = [
      "", "https://i.ytimg.com/vi/fOL20yOKqGg/hqdefault.jpg", 'https://i.ytimg.com/vi/GnjLPXZIkQM/hqdefault.jpg', "https://i.ytimg.com/vi/0hGiW1_aym8/hqdefault.jpg", "https://i.ytimg.com/vi/1e3XOejppak/hqdefault.jpg",
      "https://i.ytimg.com/vi/r2UqT6SZ7CU/hqdefault.jpg", "https://i.ytimg.com/vi/q8eHo5QHlTA/hqdefault.jpg", "https://i.ytimg.com/vi/kODnzx694PQ/hqdefault.jpg", "https://i.ytimg.com/vi/-q69mE40Lz8/hqdefault.jpg",
      "https://i.ytimg.com/vi/c_orOT3Prwg/hqdefault.jpg", "http://i.ytimg.com/vi/QSZmV_3Lm_A/hqdefault.jpg", "https://i.ytimg.com/vi/MTXrOKyBa0I/hqdefault.jpg", "https://i.ytimg.com/vi/Ez4-jddoBgc/hqdefault.jpg",
      "https://i.ytimg.com/vi/iu0O86y0G6M/hqdefault.jpg", "https://i.ytimg.com/vi/kODnzx694PQ/hqdefault.jpg", "https://i.ytimg.com/vi/u4fOZ-JVL_g/hqdefault.jpg", "https://i.ytimg.com/vi/PF4rl8ZlFWI/hqdefault.jpg",
      "https://i.ytimg.com/vi/hhfT_uqO81g/hqdefault.jpg", "https://i.ytimg.com/vi/Yp9LYh0i79U/hqdefault.jpg", "https://i.ytimg.com/vi/CCWLbSka_H8/hqdefault.jpg", "https://i.ytimg.com/vi/4ipZliHoOxA/hqdefault.jpg",
      "https://i.ytimg.com/vi/owJ2sCujYuc/hqdefault.jpg", "https://i.ytimg.com/vi/Jc0tb3hjvcE/hqdefault.jpg", "https://i.ytimg.com/vi/hAKSd_tAU8E/hqdefault.jpg", "https://i.ytimg.com/vi/vrx8Ji8giL4/hqdefault.jpg",
      "https://i.ytimg.com/vi/t2CpfE04YPg/hqdefault.jpg", "https://i.ytimg.com/vi/cqsVPHBbV-s/hqdefault.jpg", "http://i1.ytimg.com/vi/dvMssEgp1ko/hqdefault.jpg", "http://i4.ytimg.com/vi/KFlaaa8fGoE/hqdefault.jpg",
      "http://i.ytimg.com/vi/iVgTVlWCTfM/hqdefault.jpg", "http://i1.ytimg.com/vi/AgkH1T7o_VM/hqdefault.jpg", "http://i1.ytimg.com/vi/IMjWJl9LVsA/hqdefault.jpg", "http://i1.ytimg.com/vi/aqaj4UTWCp4/hqdefault.jpg",
      "http://i.ytimg.com/vi/l2dJqN3Q4OY/hqdefault.jpg", "http://i4.ytimg.com/vi/WJIuYgIvKsc/hqdefault.jpg", "https://i.ytimg.com/vi/fopHwQQ1fGg/hqdefault.jpg"]

    $scope.hideNav = true;
    $scope.hoverTitle = "";
    $scope.embedClass = "col s12 m12 l8 push-l2";
    $scope.sortType = "top.json?sort=top&t=week";
    $scope.sub = "/r/videos";
    $scope.subs = ["Politicalvideos"];
    $scope.nowPlaying = {};
    $scope.play = false;
    $scope.rightKeyPushed = false;
    $scope.leftKeyPushed = false;
    $scope.fKeyPushed = false;
    $scope.spacebarPushed = false;
    $scope.storage = $localStorage;

    console.log("local stoarge: ", $scope.storage);
    $scope.storage.message = "hello"
    console.log("sotarge.message: ", $scope.storage.message);


    (function() {
      'use strict';
      if ($scope.storage.subs){
        $scope.subs = $scope.storage.subs
      } else {
        $scope.storage.subs = $scope.subs
      }

    }());

    $scope.setHoverTitle = function(hoverTitle){
      $scope.hoverTitle = hoverTitle;
    }
    $scope.removeHoverTitle=function(){
      $scope.hoverTitle = "";
    }
    $scope.getPlaylist = function(sort, sub) {
      console.log("sub: ", sub);
      // $scope.nowPlaying.video = null;
      PlaylistService.getPlaylist(sort, sub)
      .then(function(videos) {


        if (videos === "subError"){
          alert("This sort with this sub has no videos")
          $scope.newSub= "";
          $scope.nowPlaying.video = $scope.thumbnails[0].html


        } else {

        $scope.sortType = sort;
        $scope.sub = sub;

        if ($scope.newSub){
          $scope.subs.push($scope.newSub)
          $scope.newSub = ""
        }


        $scope.thumbnails = videos.data.data.children.reduce(function(outputArr, curr){
          if (curr.data.media && ($scope.domains.indexOf(curr.data.domain) !== -1) && ($scope.defunctUrls.indexOf(curr.data.media.oembed.thumbnail_url) === -1)){
            curr.data.media.oembed.html = _.unescape(curr.data.media.oembed.html)
            outputArr.push(curr.data.media.oembed)
          }
          return outputArr;
        }, []);

        if ($scope.thumbnails.length === 0){
          alert ("sorry, there aren't any videos with that sort and this sub")
        } else {

        $scope.nowPlaying.video = $scope.thumbnails[0].html
        $scope.nowPlaying.index = 0;
        $scope.nowPlaying.title = $scope.thumbnails[0].title
        $scope.thumbnails[0].active = true;
      }
    }
      })
    }
    $scope.removeSub = function(sub){
      for (var i = 0; i < $scope.subs.length; i++) {
        if ($scope.subs[i] === sub){
          $scope.subs.splice(i, 1);
        }
      }
    }

    $scope.switchVideo = function(thumbnail){
      $scope.thumbnails[$scope.nowPlaying.index].active = false;
      $scope.nowPlaying.video = thumbnail.html;
      $scope.nowPlaying.index = $scope.thumbnails.indexOf(thumbnail)
      $scope.nowPlaying.title = thumbnail.title;
      $scope.thumbnails[$scope.nowPlaying.index].active = true;
      console.log("index: ", $scope.nowPlaying.index);
    }

    $scope.getPlaylist($scope.sortType, $scope.sub);


    $scope.trustHtml = function(src) {
      return $sce.trustAsHtml(src);
    }

    $scope.menuClicked = function(){
      $scope.navClass = "col s12 m12 l4";
      $scope.playerClass = "col s12 m12 l8";
      $scope.embedClass = "col s12 m12 l12";
      $scope.hideNav = !$scope.hideNav;
      if ($scope.hideNav){
        $scope.navClass="col s0 m0 l0";
        $scope.playerClass = "col s12 m12 l12";
        $scope.embedClass = "col s12 m12 l8 push-l2"
      }

    }

    $scope.displaymessage = function(message){
      console.log(message);
    }

    $scope.newSub = "";
    $scope.createSub = function(keyEvent, newSub){
      if (keyEvent.which === 13){
        $scope.newSub = newSub
        $scope.getPlaylist($scope.sortType, "/r/"+$scope.newSub)

      }
    }

    $scope.navigate = function(direction, index){

      //$scope.nowPlaying.video = $scope.thumbnails[i].html
      // console.log("nowPlaying: ", $scope.nowPlaying);
      //console.log("direction: ", direction);
      //console.log("index of this video: ", indexOf($scope.thumbnails));
      if (direction === "back" && index > 0){
        // console.log("back");
        $scope.thumbnails[index].active = false
        index --;
        $scope.nowPlaying.video = $scope.thumbnails[index].html;
        $scope.nowPlaying.index = index;
        $scope.nowPlaying.title = $scope.thumbnails[index].title;
        $scope.thumbnails[index].active = true;
      } else if (direction ==="forward" && index < $scope.thumbnails.length - 1){
        // console.log("forward");
        $scope.thumbnails[index].active = false

        index ++;
        $scope.nowPlaying.video = $scope.thumbnails[index].html;
        $scope.nowPlaying.index = index;
        $scope.nowPlaying.title = $scope.thumbnails[index].title
        $scope.thumbnails[index].active = true;



      }
    }

    $scope.$on("right-arrow", function(e, data){

      $scope.navigate("forward", $scope.nowPlaying.index)
    })

    $scope.$on("left-arrow", function(e, data){

      $scope.navigate("back", $scope.nowPlaying.index)
    })

    // $scope.$on("f", function(e, data){
    //   console.log("rigth arrow from layout controller");
    //
    //   $scope.navigate("forward", $scope.nowPlaying.index)
    // })
    //
    // $scope.$on("spacebar", function(e, data){
    //   console.log("rigth arrow from layout controller");
    //
    //   $scope.navigate("forward", $scope.nowPlaying.index)
    // })


    // $scope.playPause = function(){
    //   $scope.play = !$scope.play;
    // }
  }


}());
