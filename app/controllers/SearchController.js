'use strict';

app.controller("SearchController", function($scope, $window, APIFactory, FBFactory, UserFactory) {
    $scope.location = "";
    $scope.craving = "";
    let currentUser = UserFactory.getUser();
    console.log("currentUser on search view open", currentUser);


    $scope.search = () => {
        APIFactory.getResult($scope.location, $scope.craving)
            .then((searchData) => {
                // console.log("currentUser inside search function", currentUser);
                // console.log("searchData", searchData.data.restaurants);
                searchData.data.restaurants.forEach((restaurant) => {
                    // console.log("restaurant", restaurant);
                    restaurant.uid = currentUser;
                });
                $scope.restaurants = (searchData.data.restaurants);
                pushToHistory($scope.location);
                // console.log("scopeRestaurants", $scope.restaurants);
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
            // console.log("historyObj.uid", historyObj.uid);
            historyObj.history.push(location);
            // console.log("historyObj.history", historyObj.history);
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
                // console.log("value", value);
                // console.log("key", key);
            });
        });
    }
    userHistory();









    //need a .then bc it's asychronic brain illness ermehgerd
    // $scope.searchHistory = () => {
    //     $scope.location = angular.element($('#histValue').val());
    //     console.log("searchHistory value", $scope.location);
    //     $scope.search();
    // };
    // console.log("history", history);
    // console.log("historystate", history.$$state);
    // console.log("historystatevalue", history.$$state.value);
    // console.log("historydata", history.data);
    // function appendIdToHistory(){
    //not sure if needed
    // }
    // let day = new Date();
    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // $scope.today = days[day.getDay()];
    // console.log("today", $scope.today);

    // .then((searchData) => {
    // $scope.timeArr = [];
    //     console.log("restaurants", $scope.restaurants);
    //     $scope.restaurants.forEach((restaurant) => {
    //         // for (let day in restaurant.hours) {
    //         //     let dayObj = {};
    //         //     dayObj[day] = restaurant.hours[day];
    //         //     $scope.timeArr.push(dayObj);
    //         //     console.log("timeArr", $scope.timeArr);
    //         // }
    //         $scope.restaurants.hours = restaurant.hours;
    //         $scope.dateArr = Object.keys($scope.restaurants.hours);
    //         console.log("dateArr", $scope.dateArr);
    //     });
    // });
    //use character replacing to remove the coding syntax
    // console.log("day?", Object.keys($scope.restaurants.hours));

    //TODO: need to get the day objects into an array so they can be filtered.
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
    // Object.keys(todoData).forEach((key) => {
    //                 todoData[key].id = key;
    //                 todoArr.push(todoData[key]);




});
