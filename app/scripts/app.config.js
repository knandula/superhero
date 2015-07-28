'use strict';

/**
 * Created by knandula on 7/9/2015.
 */
angular.module('fictiontree2App').config(function($urlRouterProvider,$stateProvider,$authProvider,API_URL){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('main',{
      url: '/',
      templateUrl: '/views/main.html',
      controller: 'MainCtrl'
    })

    .state('account',{
      url: '/account',
      templateUrl: '/views/account.html',
      controller: 'AccountCtrl'
    })
    .state('profile',{
      url: '/profile',
      templateUrl: '/views/profile.html',
      controller: 'ProfileCtrl'
    })

    .state('triad',{
      url: '/triad',
      templateUrl: '/views/triad.html',
      controller: 'TriadCtrl'
    })
    .state('register',{
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
  })
    .state('fileupload',{
      url: '/fileupload',
      templateUrl: '/views/fileupload.html',
      controller: 'FileuploadCtrl'
    })
    .state('login',{
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    })

    .state('search',{
      url: '/search.html',
      controller: 'SearchCtrl'
    })
    .state('logout',{
      url: '/logout',
      controller: 'LogoutCtrl'
    });

    $authProvider.signupUrl  = API_URL + "register";
    $authProvider.loginUrl = API_URL + "login";



    $authProvider.google({
      clientId:'627609735136-qr51auft4rbol3moaegoclvku2b8jfa6.apps.googleusercontent.com',
      url: API_URL + 'auth/google'
    })

  $authProvider.facebook({
    clientId:'740447339435331',
    url: API_URL + 'auth/facebook'
  })



})


//.constant('API_URL','https://fictiontreeapi.herokuapp.com/') // production
  .constant('API_URL','http://localhost:7203/') // localhost

.run(function($window){
  var params = $window.location.search.substring(1);

    if(params && $window.opener && $window.opener.location.origin == $window.location.origin)
    {
       var pair = params.split('=');
       var code = decodeURIComponent(pair[1]);
      $window.opener.postMessage(code,$window.location.origin);
    }
  });
