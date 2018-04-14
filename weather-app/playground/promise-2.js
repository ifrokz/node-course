const request = require('request');

const geocodeAddress = (address) => {
    return new Promise( (resolve, reject) => {
        const encodedAddress = encodeURIComponent(address);

        request({
           url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAjwMT75uUhmhIxbO6RREe6G9MQmRqOP80`,
           json: true
        }, (error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 2));
            if(error){
                reject('Unable to connect to Google servers.');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address. ');
            }else if(body.status ==='OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            };
        });
    });
};

geocodeAddress('46789').then( (location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});