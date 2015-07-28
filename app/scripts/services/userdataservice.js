'use strict';

angular.module('fictiontree2App').factory('userDataService', function ($http,$q,$timeout,userService,API_URL) {


  var coverurl = API_URL + 'getcoverpicdata';
  var profileurl = API_URL + 'getprofilepicdata';


    return {
      getCoverPic : getCover,
      getProfilePic : getProfile

    };


    function getCover() {
      var headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
      return $http({
         method:'POST',
         url: coverurl,
        headers:headers,
        data:userService.userdata
      }).then(sendResponseData)
        .catch(sendError);
    }


    function getProfile() {
      var headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
      return $http({
        method:'POST',
        url: profileurl,
        headers:headers,
        data:userService.userdata
      }).then(sendResponseDataProfile)
        .catch(sendError);
    }

  function sendResponseData(response){
    return response.data;
  }


  function sendResponseDataProfile(response){
    return response.data;
  }

  function sendError(response){
    $q.reject('Error ' + response.status);
  }


});
