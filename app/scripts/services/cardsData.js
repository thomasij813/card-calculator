'use strict';

/**
 * @ngdoc service
 * @name cardCalculatorApp.CardsData
 * @description
 * # CardsData
 * Factory in the cardCalculatorApp.
 */
angular.module('cardCalculatorApp')
  .factory('cardsData', function () {

    var cardsData = ['J', 'Q', 'K', 'A'];
    for (var i = 10; i >= 2; i--) {
      cardsData.unshift(i);
    }

    cardsData = cardsData.map(function(card) {
      return {
        'card': card,
        'count': 4,
        'suits': {
          'clubs': true,
          'diamonds': true,
          'hearts': true,
          'spades': true
        }
      };
    });

    return{
      'data': cardsData,
      'cardsLeft': function(data) {
        return data.reduce(function(valSummed, nextVal) {
          return (valSummed + nextVal.count);
        }, 4);
      }
    };

  });
