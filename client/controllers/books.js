var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/books').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/books/', $scope.book).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id, $scope.book).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.removeBook = function(id){
		$http.delete('/api/books/'+id).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.getSuspenses = function(){
		$http.get('/api/suspenses').success(function(response){
			$scope.suspenses = response;
		});
	}

	$scope.getSuspense = function(){
		var id = $routeParams.id;
		$http.get('/api/suspenses/'+id).success(function(response){
			$scope.suspense = response;
		});
	}

	$scope.addSuspense = function(){
		console.log($scope.suspense);
		$http.post('/api/suspenses/', $scope.suspense).success(function(response){
			window.location.href='#/suspenses';
		});
	}

	$scope.updateSuspense = function(){
		var id = $routeParams.id;
		$http.put('/api/suspenses/'+id, $scope.suspense).success(function(response){
			window.location.href='#/suspenses';
		});
	}

	$scope.getDramas = function(){
		$http.get('/api/dramas').success(function(response){
			$scope.dramas = response;
		});
	}

	$scope.getDrama = function(){
		var id = $routeParams.id;
		$http.get('/api/dramas/'+id).success(function(response){
			$scope.drama = response;
		});
	}

	$scope.addDrama = function(){
		console.log($scope.drama);
		$http.post('/api/dramas/', $scope.drama).success(function(response){
			window.location.href='#/drama';
		});
	}

	$scope.updateDrama = function(){
		var id = $routeParams.id;
		$http.put('/api/dramas/'+id, $scope.drama).success(function(response){
			window.location.href='#/drama';
		});
	}

	$scope.getNonfictions = function(){
		$http.get('/api/nonfictions').success(function(response){
			$scope.nonfictions = response;
		});
	}

	$scope.getNonfiction = function(){
		var id = $routeParams.id;
		$http.get('/api/nonfictions/'+id).success(function(response){
			$scope.nonfiction = response;
		});
	}

	$scope.addNonfiction = function(){
		console.log($scope.nonfiction);
		$http.post('/api/nonfictions/', $scope.nonfiction).success(function(response){
			window.location.href='#/nonfiction';
		});
	}

	$scope.updateNonfiction = function(){
		var id = $routeParams.id;
		$http.put('/api/nonfictions/'+id, $scope.nonfiction).success(function(response){
			window.location.href='#/nonfiction';
		});
	}

	$scope.getKids = function(){
		$http.get('/api/kids').success(function(response){
			$scope.kids = response;
		});
	}

	$scope.getKid = function(){
		var id = $routeParams.id;
		$http.get('/api/kids/'+id).success(function(response){
			$scope.kid = response;
		});
	}

	$scope.addKid = function(){
		console.log($scope.kid);
		$http.post('/api/kids/', $scope.kid).success(function(response){
			window.location.href='#/kid';
		});
	}

	$scope.updateKid = function(){
		var id = $routeParams.id;
		$http.put('/api/kids/'+id, $scope.kid).success(function(response){
			window.location.href='#/kid';
		});
	}

}]);
