'use strict';

app.controller("SearchController", function($scope, $window, APIFactory, FBFactory, UserFactory) {
    $scope.location = "";
    $scope.craving = "";
    let currentUser = UserFactory.getUser();
    console.log("currentUser on search view open", currentUser);

    let appendId = function(restaurant) {
        Object.keys(restaurant).forEach((key) => {
            restaurant[key].id = key;
            console.log("restaurant.id", restaurant.id);
        });
    };
    $scope.search = () => {
        APIFactory.getResult($scope.location, $scope.craving)
            .then((searchData) => {
                console.log("currentUser inside search function", currentUser);
                console.log("searchData", searchData.data.restaurants);
                searchData.data.restaurants.forEach((restaurant) => {
                    restaurant.uid = currentUser;
                    appendId(restaurant);
                });
                $scope.restaurants = (searchData.data.restaurants);
                console.log("scopeRestaurants", $scope.restaurants);
            });
    };

    $scope.save = (restaurant) => {
        FBFactory.saveRestaurant(restaurant);
        console.log("restaurant?", restaurant);
    };


    $scope.watch = () => {
        $window.location.href = '#!/watch-view';
    };

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
