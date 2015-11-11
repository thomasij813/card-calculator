'use strict';

/**
 * @ngdoc function
 * @name cardCalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardCalculatorApp
 */
angular.module('cardCalculatorApp')
  .controller('MainCtrl', ['$scope', 'cardsData', function ($scope, cardsData) {

    $scope.cards = cardsData.data;
    $scope.cardsLeft = 52;

    $scope.reduceCount = function(card, suit) {
      $scope.cardsLeft -= 1;
      $scope.cards.forEach(function(dataCard) {
        if (dataCard.card === card) {
          dataCard.count --;
          dataCard.suits[suit] = false;
        }
      });
    };

    console.log($scope.cards);

  }]);
