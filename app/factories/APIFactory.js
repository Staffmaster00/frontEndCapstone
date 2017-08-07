'use strict';
// example search query:
//'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&search=onion+rings&street-address=Nashville'
app.factory("APIFactory", function($q, $http, FBURL, FBCreds) {

let access = FBCreds.accessToken;

let getResult = () => {//will pass in location and search
let location = "Nashville"; //this will be user input for location.
let search = "onion rings"; //this will be user input for search.
        return $q((resolve, reject) => {
            $http.get(`https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&search=${search}&street-address=${location}${access}`)
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