const { ObjectID } = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then( res => {
//     console.log(res)
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({text: "Postman sucks"}).then((todo)=>{
    console.log(todo)
});

// Todo.findByIdAndRemove('5ad45293ddfed028d8274176').then((todo) => {
//   console.log(todo);
// });

// {
//     text: 'a'
// }