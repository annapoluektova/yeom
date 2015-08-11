'use strict';

angular.module('yeomanApp')
.controller('AboutCtrl', function($scope, basket) {
  $scope.basket = basket;
  $scope.total = function () {
    var sum = 0;
    angular.forEach(basket.get(), function (item) {
      sum += item.quantity * item.type.price;
    });
    return sum;
  };
});