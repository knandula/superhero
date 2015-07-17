'use strict';

angular.module('fictiontree2App').service('auth', function ($state,$http,authToken,$window,API_URL,$q) {


  function authSuccessful(res){
    authToken.setToken(res.token);
    $state.go('main');
  }

  var urlBuilder = [];

  var clientId = '627609735136-qr51auft4rbol3moaegoclvku2b8jfa6.apps.googleusercontent.com';

  urlBuilder.push('response_type=code',
                  'client_id=' + clientId,
                  'redirect_uri='+ window.location.origin,
                  'scope=profile email' )

  this.googleAuth = function() {
    var url = "https://accounts.google.com/o/oauth2/auth?" + urlBuilder.join('&');
    var options = "width=500,height=500,left=" + ($window.outerWidth - 500)/2 + ",top=" + ($window.outerHeight - 500)/ 2.5
    var deffered = $q.defer();
    var popup = $window.open(url,'',options);
    $window.focus();

    $window.addEventListener('message',function(event){
          if(event.origin === $window.location.origin)
          {
            var code = event.data;
            popup.close();

            $http.post(API_URL +'auth/google', {
              code: code,
              clientid:clientId,
              redirectUri:window.location.origin
            }).success(function(jwt){
              console.log(jwt);
                authSuccessful(jwt);
                deffered.resolve(jwt);
              });
          }
    });
    return deffered.promise;
  }
  });
