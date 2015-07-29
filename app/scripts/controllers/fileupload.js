'use strict';

angular.module('fictiontree2App').controller('FileuploadCtrl', function ($scope,Upload,$timeout,$http,API_URL,$rootScope,userService) {

  $scope.imageType = {};

  $rootScope.$on('imgtype', function (event, args) {
      switch(args.from)
      {
        case "accountImageSelected":
              $scope.imageType = args.message;
               break;
      }
  });
  $(document).on('click', '#close-preview', function(){
    $('.image-preview').popover('hide');
    // Hover before close the preview
    $('.image-preview').hover(
      function () {
        $('.image-preview').popover('show');
      },
      function () {
        $('.image-preview').popover('hide');
      }
    );
  });
  $(function() {
    // Create the close button
    var closebtn = $('<button/>', {
      type:"button",
      text: 'x',
      id: 'close-preview',
      style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
      trigger:'manual',
      html:true,
      title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
      content: "There's no image",
      placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
      $('.image-preview').attr("data-content","").popover('hide');
      $('.image-preview-filename').val("");
      $('.image-preview-clear').hide();
      $('.image-preview-input input:file').val("");
      $(".image-preview-input-title").text("Browse");
    });
    // Create the preview image
    $(".image-preview-input input:file").change(function (){
      var img = $('<img/>', {
        id: 'dynamic',
        width:250,
        height:200
      });
      var file = this.files[0];
      var reader = new FileReader();
      // Set preview image into the popover data-content
      reader.onload = function (e) {
        $(".image-preview-input-title").text("Change");
        $(".image-preview-clear").show();
        $(".image-preview-filename").val(file.name);
        img.attr('src', e.target.result);
        $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
      }

      reader.readAsDataURL(file);



      $scope.formData = {};
      $scope.submit = function() {
        $http({
          method  : 'POST',
          url     : API_URL + 'uploadimage',
          data    : $.param($scope.formData),  // pass in data as strings
          headers : { 'Content-Type': 'multipart/form-data' }  // set the headers so angular passing info as form data (not request payload)
        })
          .success(function(data) {
            console.log(data);

            if (!data.success) {
              // if not successful, bind errors to error variables
              $scope.errorName = data.errors.name;
              $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
              // if successful, bind success message to message
              $scope.message = data.message;
            }
          });
      };
      $scope.submit1 = function() {

        var url= API_URL + 'uploadimage';

        var fd = new FormData();
        fd.append('input-file-preview',file);


        $http.post(API_URL + 'uploadimage',fd).success(function(res){
            console.log(res);
          })
          .error(function(err){
            console.log(err);
          })
      };


    });
  });


  $scope.$watch('files', function () {
    $scope.upload($scope.files);
  });
  $scope.log = '';

  $scope.upload = function (files) {
    if (files && files.length) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        Upload.upload({
          url: API_URL + 'uploadimage',
          fields: {
            'email': $scope.email
          },
          data:JSON.stringify({userdata:userService.userdata,imgtype:$scope.imageType}),
          file: file
        }).progress(function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          $scope.log = 'progress: ' + progressPercentage + '% ' +
          evt.config.file.name + '\n' + $scope.log;
        }).success(function (data, status, headers, config) {
          $timeout(function() {

              $scope.imgsrc = API_URL+ data;
            $rootScope.$broadcast('picupload', { from:'coverpicupload' , message: data , for:$scope.imageType,url:API_URL });
          });

        });
      }
    }
  };
  });
