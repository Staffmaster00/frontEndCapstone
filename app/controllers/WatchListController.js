'use strict';

app.controller("WatchListController", function($scope, $window, FBFactory, UserFactory){
    $scope.search = () => {
        $window.location.href = '#!/search-view';
    };
    let currentUser = null;
    function displayWatchedRestaurants() {
        let restaurantArr = [];
        console.log("Display Watched called");
        FBFactory.getWatchList(currentUser)
        .then((watchlist) => {
            console.log("watchlist data", watchlist);
            let watchData = watchlist.data;
            Object.keys(watchData).forEach((key) => {
                watchData[key].id = key;
                restaurantArr.push(watchData[key]);
            });

            $scope.userWatch = restaurantArr;
            console.log("$scope", $scope.userWatch);
        })
        .catch((err) => {
            console.log("error in displayWatchedRestaurants in SearchController", err);
        });
    }
    UserFactory.isAuthenticated()
    .then((user) => {
        console.log("user status", user);
        currentUser = UserFactory.getUser();
        displayWatchedRestaurants();
    });
    $scope.remove = (restaurantId) => {
        console.log("delete called", restaurantId);
        FBFactory.deleteRestaurant(restaurantId)
        .then((data) => {
            console.log("restaurant deleted", data);
            displayWatchedRestaurants();
        });
    };
});