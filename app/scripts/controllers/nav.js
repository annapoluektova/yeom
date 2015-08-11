'use strict';

angular.module('yeomanApp')
.controller('NavCtrl', function($scope, basket) {
  $scope.basket = basket;
});