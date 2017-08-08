"use strict";

let app = angular.module("app", ["ngRoute"])
    .constant("FBURL", "https://capstone-front-end-43447.firebaseio.com/");

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/search-view.html',
            controller: 'SearchController'
        });
        // .otherwise('/');
});