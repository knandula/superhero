'use strict';

angular.module('fictiontree2App').controller('SearchCtrl', function ($scope,$rootScope) {

  $scope.publishClick = function(option) {
    if(option =='char') {
      $scope.charinput = document.getElementById('mycharinput').value;
      $rootScope.$broadcast('eventName', { from:'searchcharacter' , message: $scope.charinput });
    }
    else if(option == 'movie') {
      $scope.movieinput = document.getElementById('mymovieinput').value;
      $rootScope.$broadcast('eventName', { from:'searchMovie' , message: $scope.movieinput });
    }
    else if(option == 'person') {
      $scope.personinput = document.getElementById('myactorinput').value;
      $rootScope.$broadcast('eventName', { from:'searchPerson' , message: $scope.personinput });
    }
    else if(option == 'thing') {
      $scope.thinginput = document.getElementById('mymovieinput').value;
      $rootScope.$broadcast('eventName', { from:'searchthing' , message: $scope.thinginput });

    }

  };
  });
