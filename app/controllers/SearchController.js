'use strict';

app.controller("SearchController", function($scope, $window, APIFactory, FBFactory) {
    $scope.location = ""; //this will be user input for location.
    $scope.craving = ""; //this will be user input for search.
    let currentUser = null;
    let day = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.today = days[day.getDay()];
    // console.log("today", $scope.today);
    $scope.search = () => {
        APIFactory.getResult($scope.location, $scope.craving)
            .then((searchData) => {
                $scope.restaurants = (searchData.data.restaurants);
                // $scope.timeArr = [];
                console.log("restaurants", $scope.restaurants);
                $scope.restaurants.forEach((restaurant) => {
                    // for (let day in restaurant.hours) {
                    //     let dayObj = {};
                    //     dayObj[day] = restaurant.hours[day];
                    //     $scope.timeArr.push(dayObj);
                    //     console.log("timeArr", $scope.timeArr);
                    // }
                    $scope.restaurants.hours = restaurant.hours;
                    $scope.dateArr = Object.keys($scope.restaurants.hours);
                    console.log("dateArr", $scope.dateArr);
                }); //use character replacing to remove the coding syntax
                // console.log("day?", Object.keys($scope.restaurants.hours));
            });
    }; //TODO: need to get the day objects into an array so they can be filtered.
    //use object.keys to iterate over the restaurant.hours
    // $scope.dayDisplay = (day) => {
    //     return $scope.restaurants.hours.day === $scope.today;
    //     // $scope.dateArr.forEach((day) => {
    //     //     console.log("day", day);
    //     //     console.log("today", $scope.today);
    //     //     if ($scope.today === day) {
    //     //         $scope.restaurant.date = day;
    //     //     }
    //     // });
    // };


    function displayWatchedRestaurants() {
        let restaurantArr = [];
        // console.log("Display Watched called");
        FBFactory.getWatchList(currentUser)
            .then((watchlist) => {
                console.log("watchlist data", watchlist);
                let watchData = watchlist.data;
                Object.keys(watchData).forEach((key) => {
                    watchData[key].id = key;
                    restaurantArr.push(watchData[key]);
                });

                $scope.userWatch = restaurantArr;
            })
            .catch((err) => {
                console.log("error in displayWatchedRestaurants in SearchController", err);
            });
    }
    $scope.save = (restaurant) => {
        FBFactory.saveRestaurant(restaurant);
        console.log("restaurant?", restaurant);
    };





});
