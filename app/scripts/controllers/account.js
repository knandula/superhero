'use strict';

/**
 * @ngdoc function
 * @name fictiontree2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the fictiontree2App
 */
angular.module('fictiontree2App').controller('AccountCtrl', function ($scope,$http,$rootScope,userService,userDataService,API_URL) {

  //
  //userDataService.getCoverPic()
  //  .then(CoverPicSuccess,null,notification)
  //  .catch(errorCallback);
  //
  //userDataService.getProfilePic()
  //  .then(ProfPicSuccess,null,notification)
  //  .catch(errorCallback);
  //
  //function CoverPicSuccess(data){
  //  $rootScope.$broadcast('picupload', { from:'coverpicupload' , message: data , for:'cover'  });
  //}
  //
  //function ProfPicSuccess(data){
  //  $rootScope.$broadcast('picupload', { from:'coverpicupload' , message: data , for:'profile'  });
  //}
  //
  //function notification(notification)
  //{
  //  console.log(notification);
  //}
  //
  //function errorCallback(err){
  //  console.log(err);
  //}

});
