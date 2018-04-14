const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for.',
            string: true
        } 
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAjwMT75uUhmhIxbO6RREe6G9MQmRqOP80`;

axios.get(geocodeUrl)
    .then( response => {
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find that address.');
        }
        const longitude = response.data.results[0].geometry.location.lng;
        const latitude = response.data.results[0].geometry.location.lat;
        const forecastKey = '35f8811a196b0a4b2a4647d6a0ea6e0a';
        const weatherUrl =  `https://api.darksky.net/forecast/${forecastKey}/${latitude},${longitude}`;
        console.log(response.data.results[0].formatted_address, latitude, longitude);
        return axios.get(weatherUrl);
    }).then(response => {
        const temperature = response.data.currently.temperature;
        const apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);

    }).catch((e) => {
        if(e.code === 'ENOTFOUND'){
            console.log('Unable to connect to the API servers.')
        } else {
            console.log(e.message);
        };
    });