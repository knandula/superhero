'use strict';

angular.module('fictiontree2App').controller('TriadCtrl', function (Service,$scope,$rootScope) {

  $rootScope.$on('eventName', function (event, args) {

    switch(args.from)
    {
      case 'searchcharacter':
        $scope.charinput = args.message;
            break;
      case 'searchMovie':
            break;
      case 'searchPerson':
        break;
      case 'searchthing':
            break;
    }
  });

});
