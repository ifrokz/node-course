const moment = require('moment');

const generateMessage = (from, text) => ({
    from: from,
    text: text, 
    createdAt: moment.now()
});

const generateLocationMessage = (from, latitude, longitude) => ({
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
});

module.exports = {
    generateMessage,
    generateLocationMessage
};