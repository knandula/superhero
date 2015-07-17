'use strict';

angular.module('fictiontree2App').controller('headerCtrl', function ($scope,$auth) {
  $scope.isAuthenticated = $auth.isAuthenticated;
  });
