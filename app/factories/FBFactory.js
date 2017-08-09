'use strict';

app.factory("FBFactory", function($q, $http, FBURL, FBCreds) {

    let getWatchList = (userId) => {
        console.log("userId", userId);
        return $q((resolve, reject) => {
            $http.get(`${FBURL}watchlists.json?orderBy="uid"&equalTo="${userId}"`)
                .then((saveList) => {
                    resolve(saveList);
                })
                .catch((err) => {
                    console.log("Error in FBFactory getWatchList", err);
                    reject(err);
                });
        });
    };
    let saveRestaurant = (restaurant) => {
        return $q((resolve, reject) => {
            $http.post(`${FBURL}watchlists.json`,//TODO: add userid as property b4 posting
                    angular.toJson(restaurant))
                .then((submittedRestaurant) => {
                    resolve(submittedRestaurant);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    let deleteRestaurant = (restaurant) => {
        return $q((resolve, reject) => {
            if (restaurant) {
                $http.delete(`${FBURL}watchlists/${restaurant}.json`)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            } else {
                console.log("restaurant undefined");
            }
        });
    };

    return {getWatchList, saveRestaurant, deleteRestaurant};
});


