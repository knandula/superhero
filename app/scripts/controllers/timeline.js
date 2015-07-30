'use strict';

/**
 * @ngdoc function
 * @name fictiontree2App.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the fictiontree2App
 */
angular.module('fictiontree2App').controller('TimelineCtrl', function ($scope,$http,API_URL,$rootScope) {  $scope.dataStream = {};

  $scope.reload = function() {
    var urlget = API_URL + 'getStream';
    $http.get(urlget).success(function (data) {
      $scope.dataStream = data.posts;
    });
  }

  $scope.reload();

  $rootScope.$on('post', function (event, args,API_URL) {
    switch (args.from) {
      case 'post':
            $scope.reload();
            break;
    }
  });

    });
