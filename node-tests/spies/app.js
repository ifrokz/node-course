const db = require('./db');

const handleSignup = (email, password) => {
    db.saveUser({email,password});
};

module.exports = {
    handleSignup
};