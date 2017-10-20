'use strict';

app.factory("FBFactory", function($q, $http, FBURL, FBCreds) {

    let getWatchList = (userId) => {
        console.log("userId in getWatchList", userId);
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
            $http.post(`${FBURL}watchlists.json`,
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
                console.log("restaurant undefined in deleteRestaurant");
            }
        });
    };
    let postHistory = (historyObj) => {
        return $q((resolve, reject) => {
            console.log("historyObj in postHistory", historyObj);
            $http.post(`${FBURL}searchHistory.json`,
                angular.toJson(historyObj))
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
        });
    };
    let getHistory = (userid) => {
        return $q((resolve, reject) => {
            console.log("userid in getHistory", userid);
            $http.get(`${FBURL}searchHistory.json?orderBy="uid"&equalTo="${userid}"`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
        });
    };



    return {getWatchList, saveRestaurant, deleteRestaurant, postHistory, getHistory};
});