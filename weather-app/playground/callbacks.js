const getUser = (id, callback) => {
    const user = {
        id: id,
        name: 'Ivan'
    };

    setTimeout(() => {
        callback(user);
    },3000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});