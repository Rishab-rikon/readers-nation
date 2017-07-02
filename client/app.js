var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/home.html'
	})
	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/latest-books/books.html'
	})
	.when('/books/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/latest-books/book_details.html'
	})
	.when('/books/add',{
		controller:'BooksController',
		templateUrl: 'views/latest-books/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/latest-books/edit_book.html'
	})
	.when('/suspenses',{
		controller:'BooksController',
		templateUrl:'views/suspense/suspense.html'
	})
	.when('/suspenses/sus-detail/:id',{
		controller:'BooksController',
		templateUrl:'views/suspense/sus-detail.html'
	})
	.when('/suspenses/add',{
		controller:'BooksController',
		templateUrl:'views/suspense/sus-add.html'
	})
	.when('/suspenses/sus-edit/:id',{
		controller:'BooksController',
		templateUrl:'views/suspense/sus-edit.html'
	})
	.when('/drama',{
		controller:'BooksController',
		templateUrl:'views/drama/drama.html'
	})
	.when('/drama/drama-detail/:id',{
		controller:'BooksController',
		templateUrl:'views/drama/drama-detail.html'
	})
	.when('/drama/add',{
		controller:'BooksController',
		templateUrl:'views/drama/drama-add.html'
	})
	.when('/drama/drama-edit/:id',{
		controller:'BooksController',
		templateUrl:'views/drama/drama-edit.html'
	})
	.when('/nonfiction',{
		controller:'BooksController',
		templateUrl:'views/nonfiction/nonfiction.html'
	})
	.when('/nonfiction/non-detail/:id',{
		controller:'BooksController',
		templateUrl:'views/nonfiction/non-detail.html'
	})
	.when('/nonfiction/non-add',{
		controller:'BooksController',
		templateUrl:'views/nonfiction/non-add.html'
	})
	.when('/nonfiction/non-edit/:id',{
		controller:'BooksController',
		templateUrl:'views/nonfiction/non-edit.html'
	})
	.when('/kid',{
		controller:'BooksController',
		templateUrl:'views/kid/kid.html'
	})
	.when('/kid/kid-detail/:id',{
		controller:'BooksController',
		templateUrl:'views/kid/kid-detail.html'
	})
	.when('/kid/kid-add',{
		controller:'BooksController',
		templateUrl:'views/kid/kid-add.html'
	})
	.when('/kid/kid-edit/:id',{
		controller:'BooksController',
		templateUrl:'views/kid/kid-edit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
