'use strict';


angular.module('fictiontree2App').controller('LogoutCtrl', function ($auth,authToken,userService,userDataService,$state) {

  userDataService = {};
  userService = {};
  $auth.logout();
  authToken.removeToken();
    $state.go('main');
  });
