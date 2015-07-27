'use strict';

/**
 * @ngdoc function
 * @name fictiontree2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the fictiontree2App
 */
angular.module('fictiontree2App').controller('AccountCtrl', function ($scope,$http,$rootScope,userService,API_URL) {

  $scope.coverpicdata = "";
  $scope.profilepicdata = "";

  var coverurl = API_URL + 'getcoverpicdata';
  var profileurl = API_URL + 'getprofilepicdata';
  $http.post(coverurl,userService.userdata).success(function(data, status) {

    $scope.coverpicdata = data;
  })

  $http.post(profileurl,userService.userdata).success(function(data, status) {
    $scope.profilepicdata = data;
  })

  $scope.publish = function(msg){
    $rootScope.$broadcast('imgtype', { from:'accountImageSelected' , message: msg });
  }

  $rootScope.$on('picupload', function (event, args) {
    switch(args.from)
    {
      case 'coverpicupload':
         if(args.for == 'cover')
          $scope.coverpicdata = args.message;
        else
         if(args.for == 'profile')
           $scope.profilepicdata = args.message;
        break;
      case 'searchMovie':

        break;
      case 'searchPerson':
        break;
      case 'searchthing':
        break;
    }
  });
});
