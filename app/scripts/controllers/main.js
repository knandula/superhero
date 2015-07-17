'use strict';

angular.module('fictiontree2App').controller('MainCtrl', function ($scope,auth,authToken,alert,$auth) {

    $scope.authenticate = function(provider){
        $auth.authenticate(provider).then(function(res){
          console.log(res);
          alert('success','Welcome  ' + res.data.user.displayName + " !");
        },function(err){
          alert('warning','Something went wrong :(   ',err.message);
        });
    };
  });
