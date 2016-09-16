var app = angular.module('myport',['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
         	   templateUrl: '../partials/pages/aboutme.html',
         	   controller: 'Home'
       	 })

        .when('/Projects', {
            templateUrl: '../partials/pages/files.html',
            controller: 'FilesController'
        })

        .when('/Contact', {
            templateUrl: '../partials/pages/contacts.html',
            controller: 'ContactController'
        });
        $locationProvider.html5Mode(true);
});

app.directive('navigationMenu', function () {
    return {
        restrict: 'E',
        templateUrl: '../partials/pages/navbar.html',
        controller: 'Nav'
    };
});

