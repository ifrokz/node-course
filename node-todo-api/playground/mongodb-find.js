// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server' ,err);
    };

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ad17e750a5de14c293b0388')
    // }).toArray().then( (docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Ivan'
    }).toArray().then( (users) => {
        console.log(JSON.stringify(users, undefined, 2));
    }, err => {
        console.log('Unable to fetch users.');
    })

    client.close();
});