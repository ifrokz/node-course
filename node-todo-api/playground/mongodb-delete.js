// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server' ,err);
    };

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( res => {
    //     console.log(res.result);
    // });

    // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then( res => {
    //     console.log(res.result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then( res => {
    //     console.log(res)
    // });

    // challenge =>

    db.collection('Users').deleteMany({
        name: 'Andrew'
    });

    db.collection('Users').findOneAndDelete({
        _id: ObjectID("5ad17ba1b64ae52940ed56ac")
    }).then( res => {
        console.log(JSON.stringify(res, undefined, 2));
    });


    client.close();
});