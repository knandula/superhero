'use strict';


angular.module('fictiontree2App').controller('LogoutCtrl', function (authToken,$state) {

    authToken.removeToken();
    $state.go('main');
  });
