'use strict';

angular.module('fictiontree2App').controller('LoginCtrl', function ($scope,$http,$auth,$state,alert,userService,userDataService,authToken,API_URL,$rootScope) {

      $scope.submit = function(){
        var url= API_URL + 'login';
        var user = {
          email: $scope.email,
          password: $scope.password
        };

        $auth.login(user,$state).then(function(res){
          userService.userdata = res.data.user;
          $state.go('account')
        }).catch(handleError);
      }
    function handleError(err){
      alert('warning','Something went wrong :(',err.message);

    }
  });
