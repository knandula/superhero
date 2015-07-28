'use strict';

/**
 * @ngdoc function
 * @name fictiontree2App.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the fictiontree2App
 */
angular.module('fictiontree2App').controller('ProfileCtrl', function ($scope,userDataService,$rootScope,API_URL) {

  $scope.publish = function(msg){
    $rootScope.$broadcast('imgtype', { from:'accountImageSelected' , message: msg });
  }


  userDataService.getCoverPic()
    .then(CoverPicSuccess,null,notification)
    .catch(errorCallback);

  userDataService.getProfilePic()
    .then(ProfPicSuccess,null,notification)
    .catch(errorCallback);

  function CoverPicSuccess(data){
    console.log("coverpicurl");
    var tmp = data.replace("public\\","");

    $scope.coverpicdata = API_URL + tmp;
  }

  function ProfPicSuccess(data){
    console.log("profilepicurl");
    var tmp = data.replace("public\\","");
    $scope.profilepicdata = API_URL + tmp;
  }

  function notification(notification)
  {
    console.log(notification);
  }

  function errorCallback(err){
    console.log(err);
  }

  $rootScope.$on('picupload', function (event, args,API_URL) {
    switch(args.from)
    {
      case 'coverpicupload':
        if(args.for == 'cover')
        {
          var tmp = args.message.replace("public\\","");
          $scope.coverpicdata = args.url+tmp;}
        else
        if(args.for == 'profile'){
          console.log(args.message);
          var tmp = args.message.replace("public\\","");
          $scope.profilepicdata = args.url+tmp;}
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
