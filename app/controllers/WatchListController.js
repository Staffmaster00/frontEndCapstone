'use strict';

app.controller("WatchListController", function($scope, $window, FBFactory, UserFactory){
    $scope.search = () => {
        $window.location.href = '#!/search-view';
    };

    let currentUser = UserFactory.getUser();

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
            })
            .catch((err) => {
                console.log("error in displayWatchedRestaurants in SearchController", err);
            });
    }

    // $scope.remove((restaurant)=>{
    //     console.log("delete called", restaurant);
    //     FBFactory.deleteRestaurant(restaurant)
    //         .then((data) => {
    //             console.log("restaurant deleted", data);
    //             displayWatchedRestaurants(currentUser);
    //         });
    // });




});