'use strict';

angular.module('fictiontree2App').controller('MainCtrl', function ($scope,$state,userService,auth,authToken,alert,$auth) {

    $scope.authenticate = function(provider){
        $auth.authenticate(provider).then(function(res){
          console.log(res);
          userService.userdata = res.data.user;
          $state.go('account');
        },function(err){
          alert('warning','Something went wrong :(   ',err.message);
        });
    };
  });
