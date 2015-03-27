'use strict';

angular.module('ngBoardGameSellerApp')
	.controller('GamesListCtrl', ['$scope', '$filter', function ($scope, $filter) {
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
			}, {
				stars: 2,
				body: 'boring!',
				name: 'Sonny'
			}]
		}, {
			name: 'Monopoly',
			playersNeeded: 2,
			description: 'Show your friends who\'s the boss',
			reviews: [{
				stars: 5,
				body: 'Good.',
				name: 'Hasbro'
			}, {
				stars: 5,
				body: 'fun game',
				name: 'not Hasbro'
			}]
		}, {
			name: 'Texas Hold \'Em',
			playersNeeded: 8,
			description: 'Lose money to friends',
			reviews: [{
				stars: 5,
				body: 'Totally addicted.',
				name: 'Bob'
			}, {
				stars: 4,
				body: 'Can\'t stop playing',
				name: 'Larry'
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
			description: 'Simple racing board game',
			reviews:[{
				stars: 1,
				body: 'Too childish',
				name: 'an Adult'
			}, {
				stars: 1,
				body: 'It was okay.',
				name: 'lskdjf'
			}, {
				stars: 1,
				body: 'this game is bad!',
				name: 'Lonnie'
			}]
		}];

		var reverseHighest = false;

		$scope.reviewVolumeOrder = function(criteria, reverse) {
			$scope.boardGameData = $filter('orderBy')($scope.boardGameData, criteria, reverse);
		};

		$scope.alphabetize = function(criteria, reverse) {
			$scope.reviewVolumeOrder(criteria, reverse);
		};

		$scope.reviewHighestRatingOrder = function(reverse) {

			var criteria = boardGameData;
			var calculatedRatingsScore = function(criteria) {
				var total;
				for(var i=0; i < criteria.length; i++){
					total += criteria[i].stars
				}
				return (total/criteria.length);
			}
			$scope.boardGameData = $filter('orderBy')($scope.boardGameData, calculatedRatingsScore(), reverse)
		}
	}]);