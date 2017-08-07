'use strict';
// example search query:
//'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&search=onion+rings&street-address=Nashville'
app.factory("APIFactory", function($q, $http, FBURL, FBCreds) {

let access = FBCreds.accessToken;

let getResult = (location, search) => {//will pass in location and search from a user
        return $q((resolve, reject) => {
            $http.get(`https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&pickup-radius=12&search=${search}&street-address=${location}${access}`)
                .then((result) => {
                    console.log("result", result);
                    resolve(result);
                })
                .catch((err) => {
                    console.log("oops", err);
                    reject(err);
                });
        });
    };

    return {getResult};
});