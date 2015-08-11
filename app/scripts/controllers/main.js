'use strict';

angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope, catalog, basket) {
    $scope.catalog = catalog;
    $scope.basket = basket;
  });
