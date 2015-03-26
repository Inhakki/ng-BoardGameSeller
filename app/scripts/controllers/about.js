'use strict';

/**
 * @ngdoc function
 * @name ngBoardGameSellerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngBoardGameSellerApp
 */

var boardGameData = [{
		name:"Solitaire",
		playersNeeded: 1,
		description: "Solitaire. A solitary simulation of soul-crushing solipsism."
		reviews: [{
			stars: 1,
			body: "I didn't like this. I felt lonely."
			name: "Dillon"
		}, {
			stars: 3,
			body: "OK game.",
			name: "Sarah"
		}]
	}, {
		name: 'Monopoly',
		playersNeeded: 2,
		description: "Show your friends who's the boss",
		reviews: [{
			stars: 5,
			body: "Good."
			name: "Hasbro"
		}]
	}, {
		name: 
	}];

var app = angular.module('ngBoardGameSellerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.controller('GamesListController', function(){

});