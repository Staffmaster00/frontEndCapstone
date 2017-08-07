"use strict";

let app = angular.module("app", ["ngRoute"])
    .constant("FBURL", "/");

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/search-view.html',
            controller: 'SearchController'
        });
        // .otherwise('/');
});