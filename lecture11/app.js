(function(){
  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = 'Fernando';
    $scope.stateOfBeing = "hungry";
    $scope.sayMessage = function(){
      return "Fernando likes to eat mexican food all day and night!!";
    };

    $scope.feedYaakov = function (){
      $scope.stateOfBeing = "fed";
    }
  }
})();
