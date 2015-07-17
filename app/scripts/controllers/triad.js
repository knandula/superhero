'use strict';

angular.module('fictiontree2App').controller('TriadCtrl', function (Service,$scope,$rootScope) {

  $rootScope.$on('eventName', function (event, args) {

    switch(args.from)
    {
      case 'searchcharacter':
        // check if the character name is existing or new ?
        // if existing then get the associated movies and actors in the movies
        //
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
