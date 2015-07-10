'use strict';


angular.module('fictiontree2App').controller('LogoutCtrl', function (authToken) {

    authToken.removeToken();
    $state.go('main');
  });
