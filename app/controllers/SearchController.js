'use strict';

app.controller("SearchController", function($scope, $window, APIFactory, FBFactory, UserFactory) {
    $scope.location = "";
    $scope.craving = "";
    let currentUser = UserFactory.getUser();
    console.log("currentUser on search view open", currentUser);


    $scope.search = () => {
        APIFactory.getResult($scope.location, $scope.craving)
            .then((searchData) => {
                searchData.data.restaurants.forEach((restaurant) => {
                    restaurant.uid = currentUser;
                });
                $scope.restaurants = (searchData.data.restaurants);
                pushToHistory($scope.location);
            });
    };


    $scope.save = (restaurant) => {
        FBFactory.saveRestaurant(restaurant);
    };


    $scope.watch = () => {
        $window.location.href = '#!/watch-view';
    };

    function pushToHistory(location) {
        console.log("pushToHistory running", typeof location);
        if (!isNaN(location)) {
            let historyObj = {
                history: [],
                uid: currentUser
            };
            historyObj.history.push(location);
            FBFactory.postHistory(historyObj);
        } else {
            console.log("not a zip code or failed to run");
        }
    }

    function userHistory() {
        $scope.history = [];
        FBFactory.getHistory(currentUser)
        .then((historyData) => {
            console.log("historydata.data", historyData.data);
            angular.forEach(historyData.data, (value, key) => {
                $scope.history.push(value);
            });
        });
    }
    userHistory();
});