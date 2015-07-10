'use strict';

/**
 * Created by knandula on 7/9/2015.
 */
angular.module('fictiontree2App').config(function($urlRouterProvider,$stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('main',{
      url: '/',
      templateUrl: '/views/main.html'
    })
    .state('register',{
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
  })
    .state('login',{
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    })
    .state('logout',{
      url: '/logout',
      controller: 'LogoutCtrl'
    });

  //$httpProvider.interceptors.push('authInterceptor');
})

.constant('API_URL','http://localhost:3000/');
