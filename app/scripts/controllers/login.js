'use strict';

angular.module('fictiontree2App').controller('LoginCtrl', function ($scope,$http,$auth,alert,$state,authToken,API_URL) {

      $scope.submit = function(){
        var url= API_URL + 'login';
        console.log(url);
        var user = {
          email: $scope.email,
          password: $scope.password
        };

        $auth.login(user).then(function(res){
          console.log(res);
          alert('success','Welcome', "Thanks for coming back " + res.data.user.email + " !");
        }).catch(handleError);
      }
    function handleError(err){
      alert('warning','Something went wrong :(',err.message);
    }
  });
