const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    });
});

const hashedPassword = '$2a$10$CNRzC1b71VigVvcE6LL8vuAzQw/6eSNxbVu/F5OhQlNeXXDVv850e';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
});

// let data = {
//     id: 10
// };

// let token = jwt.sign(data, '123abc');
// console.log(token);


// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// ---------------------------------------


// const data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id= 5;
// // token.hash = SHA256(JSON.stringify(token.data).toString());

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }