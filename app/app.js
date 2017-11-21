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
            controller: 'SearchController'//maybe get rid of slash in front of search-view after the when?
        })
        .when('/watch-view', {
            templateUrl: 'partials/watch-view',
            controller: 'WatchListController'
        })
        .otherwise('/');
});