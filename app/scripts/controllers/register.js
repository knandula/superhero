'use strict';

angular.module('fictiontree2App').controller('RegisterCtrl', function ($scope,userService,$state,$auth,alert) {
    $scope.submit = function()
    {
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $auth.signup(user).then(function(res){
        userService.userdata = res.data.user;
        alert('success','Welcome  ' + res.data.user.email + " !");
        $state.go('account');
      }).catch(handleError);
    }

  function handleError(err){
    alert('warning','Something went wrong :(',err.message);
  }

  });

