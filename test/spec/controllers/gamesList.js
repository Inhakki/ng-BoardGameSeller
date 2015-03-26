'use strict';

describe('Controller: GamesListCtrl', function(){
	
  // load the controller's module
  beforeEach(module('ngBoardGameSellerApp'));
  beforeEach(module('ui.bootstrap'));

  var GamesListCtrl,
  	scope;

  beforeEach(inject(function ($controller, $rootScope) {
  	scope = $rootScope.$new();
  	GamesListCtrl = $controller('GamesListCtrl', {
  		$scope: scope
  	})
  }));

  it('should attach a list of board games to the scope also', function() {
    expect(scope.boardGameData.length).toBe(5);
  });

  it('should sort the list by number of reviews', function(){
    scope.reviewVolumeOrder()
    expect(scope.boardGameData[0].name).toBe("Solitaire");
  });

  it('should sort the list by highest average view', function(){
    scope.reviewHighestRatingOrder()
    expect(scope.boardGameData[0].name.toBe("Monopoly"));
  });
});