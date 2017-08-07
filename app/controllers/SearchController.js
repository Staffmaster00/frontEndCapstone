'use strict';

app.controller("SearchController", function($scope, $window, APIFactory, FBFactory) {
    $scope.location = ""; //this will be user input for location.
    $scope.craving = ""; //this will be user input for search.
    let currentUser = null;

    $scope.search = () => {
        APIFactory.getResult($scope.location, $scope.craving)
            .then((searchData) => {
                $scope.restaurants = (searchData.data.restaurants);
                console.log("restaurants", $scope.restaurants);
                console.log("day?", $scope.restaurants.hours);
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


});
