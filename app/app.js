"use strict";

let app = angular.module("app", ["ngRoute"])
    .constant("FBURL", "/");

todoApp.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'UserController'
        // })
        // .when('/', {
        //     templateUrl: 'partials/.html',
        //     controller: ''
        // })
        // .when('/', {
        //     templateUrl: 'partials/.html',
        //     controller: ''
        // })
        // .when('/', {
        //     templateUrl: 'partials/.html',
        //     controller: ''
        // })
        // .when('/:', {
        //     templateUrl: 'partials/.html',
        //     controller: ''
        // })
        .otherwise('/');
});