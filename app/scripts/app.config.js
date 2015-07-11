'use strict';

/**
 * Created by knandula on 7/9/2015.
 */
angular.module('fictiontree2App').config(function($urlRouterProvider,$stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

     .state('main',{
      url: '/',
      templateUrl: '/views/main.html',
      controller: 'MainCtrl'
      })

    .state('register',{
      url: '/register',
      views:{
        'register' : {
          templateUrl: '/views/register.html',
          controller: 'RegisterCtrl'
        }
      }})
    .state('login',{
      url: '/login',
      views:{
        'login' : {
          templateUrl: '/views/login.html',
          controller: 'LoginCtrl'
        }
    }})

    .state('search',{
      url: '/search',
      views:{
        'search' : {
          templateUrl: '/views/search.html',
          controller:'SearchCtrl'
        }
    }})
    .state('logout',{
      url: '/logout',
      controller: 'LogoutCtrl'
    });

  //$httpProvider.interceptors.push('authInterceptor');
})

.constant('API_URL','https://fictiontreeapi.herokuapp.com/');
