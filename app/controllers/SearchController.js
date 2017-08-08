'use strict';

app.controller("SearchController", function($scope, $window, APIFactory, FBFactory) {
    $scope.location = ""; //this will be user input for location.
    $scope.craving = ""; //this will be user input for search.
    let currentUser = null;
    let day = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = days[day.getDay()];

    $scope.search = () => {
        APIFactory.getResult($scope.location, $scope.craving)
            .then((searchData) => {
                $scope.restaurants = (searchData.data.restaurants);
                console.log("restaurants", $scope.restaurants);
                $scope.restaurants.forEach((restaurant) => {
                    $scope.restaurants.hours = restaurant.hours;
                    $scope.dateArr = Object.keys($scope.restaurants.hours);
                    // console.log("dateArr", $scope.dateArr);
                }); //use character replacing to remove the coding syntax
                // console.log("day?", Object.keys($scope.restaurants.hours));
            });
    };
    //use object.keys to iterate over the restaurant.hours
    $scope.dayDisplay = (restaurant) => {
        $scope.dateArr.forEach((day) => {
            console.log("day", day);
            if (today === $scope.dateArr[day]) {
                $scope.restaurant.date = $scope.restaurant[day].hours;
            }
        });
    };


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

    console.log("today", today);



});
