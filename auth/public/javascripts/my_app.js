angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
                                
    $scope.user_images = [];
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
      $scope.user_images = data.user_images;
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);