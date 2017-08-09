"use strict";

let app = angular.module("app", ["ngRoute"])
    .constant("FBURL", "https://capstone-front-end-43447.firebaseio.com/");

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'UserController'
        })
        .when('/search-view', {
            templateUrl: 'partials/search-view',
            controller: 'SearchController'
        })
        .when('/watch-view', {
            templateUrl: 'partials/watch-view',
            controller: 'WatchListController'
        })
        .otherwise('/');
});