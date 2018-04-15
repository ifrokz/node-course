const { ObjectID } = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5ad2ef6b77adc816f4d5c72c';
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('- Todos:\n', todos);
// },err=>{});

// Todo.findOne({
//     _id: id
// }).then(todo=>{
//     console.log('- Todo:\n', todo)
// },err=>{});

// Todo.findById(id).then( todo => {
//     if(!todo){
//         return console.log('Id not found.');
//     }
//     console.log('- Todo by id:\n', todo);
// }).catch((e)=> console.log(e));

User.findById('5ad29e9cdef4e004bc3f3b72').then( user => {
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, err => {
    console.log(err)
});