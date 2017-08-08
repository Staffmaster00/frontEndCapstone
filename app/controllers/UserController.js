'use strict';

app.controller("UserController", function($scope, $window, UserFactory) {

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("Register clicked.");
    UserFactory.createUser($scope.account)
    .then( (userData) => {
      console.log("User Registered.", userData);
      $scope.login();
    });
  };

  $scope.login = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData", userData);
      $window.location.href = '#!/search-view';
    });
  };

});