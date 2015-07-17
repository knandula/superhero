'use strict';

angular.module('fictiontree2App').controller('RegisterCtrl', function ($scope,$auth,alert) {
    $scope.submit = function()
    {
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $auth.signup(user).then(function(res){
        console.log(res);
        alert('success','Welcome  ' + res.data.user.email + " !");
      }).catch(handleError);
    }

  function handleError(err){
    alert('warning','Something went wrong :(',err.message);
  }

  });

