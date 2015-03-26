'use strict';

angular.module('ngBoardGameSellerApp')
	.controller('GamesListCtrl', function ($scope) {
		$scope.boardGameData = [{
			name: 'Solitaire',
			imageUrl: 'app/images/Solitare_7.png',
			playersNeeded: 1,
			description: 'Solitaire. A solitary simulation of soul-crushing solipsism.',
			reviews: [{
				stars: 1,
				body: 'I didn\'t like this. I felt lonely.',
				name: 'Dillon'
			}, {
				stars: 3,
				body: 'OK game.',
				name: 'Sarah'
			}]
		}, {
			name: 'Monopoly',
			playersNeeded: 2,
			description: 'Show your friends who\'s the boss',
			reviews: [{
				stars: 5,
				body: 'Good.',
				name: 'Hasbro'
			}]
		}, {
			name: 'Texas Hold \'Em',
			playersNeeded: 8,
			description: 'Lose money to friends',
			reviews: [{
				stars: 5,
				body: 'Totally addicted.',
				name: 'Bob'
			}]
		}, {
			name: 'LIFE',
			playersNeeded: 2,
			description: 'Forecast your woes!',
			reviews: [{
				stars: 3,
				body: 'Cool game',
				name: 'Rob'
			}]
		}, {
			name: 'Candyland',
			playersNeeded: 2,
			description: 'Simple racing board game'
		}];
	});