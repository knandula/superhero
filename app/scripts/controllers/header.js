'use strict';

angular.module('fictiontree2App').controller('headerCtrl', function ($scope,authToken) {
  $scope.isAuthenticated = authToken.isAuthenticated;
  });
