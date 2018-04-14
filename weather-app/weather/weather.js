const request = require('request');

module.exports.getWeather = (latitude, longitude, callback) => {
    const forecastKey = '35f8811a196b0a4b2a4647d6a0ea6e0a';
    request({
        url: `https://api.darksky.net/forecast/${forecastKey}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to conecto to Forecast.io servers.');
        } else if (response.statusCode === 400) {
            callback(body.error);
        } else if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                humidity: body.currently.humidity,
                windSpeed: body.currently.windSpeed
            });
        }
    });
}