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
  var url = API_URL + 'getprofiledata';
  $http.post(url,userService.userdata).success(function(data, status) {
    $scope.coverpicdata = data;
  })

  $rootScope.$on('coverpageimage', function (event, args) {
    switch(args.from)
    {
      case 'coverpicupload':
          $scope.coverpicdata = args.message;
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
