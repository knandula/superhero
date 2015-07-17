'use strict';


angular.module('fictiontree2App').controller('LogoutCtrl', function ($auth,authToken,$state) {

  $auth.logout();
  authToken.removeToken();
    $state.go('main');
  });
