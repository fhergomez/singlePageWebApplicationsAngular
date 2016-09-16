(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope){
    $scope.name = "Fernando";
    $scope.sayHello = function(){
      return "Hello Everyone!!";
    }
  });

})();
