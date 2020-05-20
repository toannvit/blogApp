(() => {
  angular.module('loginModule', [
    'ngRoute'
  ]).controller('loginController', function loginController($scope, $location) {
    $scope.information = {
      email: '',
      password: '',
    }

    $scope.submit = function(information) {
      if(information.email == 'toannvit@gmail.com' && information.password === '12345') {
        $location.path('/tin-tuc');
      } else {
        alert('Incorrect username/password');
      }
    }
  });
})()