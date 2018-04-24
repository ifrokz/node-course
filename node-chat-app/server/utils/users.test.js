const expect = require('expect');

const {User, Users} = require('./users');

describe('class Users',()=>{
    let users;

    beforeEach(()=>{
        users = new Users();
        users.users = [
            new User('1','Mike','Node Course'),
            new User('2','Jen','React Course'),
            new User('3','Julie','Node Course')
        ];
    })

    it('should add new user',()=>{
        const users = new Users();
        const user = {id:'123',name:'Ivan',room:'The Office Fans'}
        const resUser = users.addUser(user.id,user.name,user.room);
        
        expect(resUser).toEqual(user);
        expect(resUser).toEqual(users.users[0])
    });

    it('shoud retur names for node course', () => {
        const userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike','Julie']);
    });

    it('shoud return names for react course', () => {
        const userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user by id',()=>{
        const res = users.removeUser('2');

        expect(res).toEqual({"id": "2", "name": "Jen", "room": "React Course"});
    });

    it('should not remove a user with an invalid id',()=>{
        const res = users.removeUser('InvalidId');

        expect(res).toBeFalsy();
    });

    it('should return a users searching by id',()=>{
        const userId = '2';
        const res = users.getUser(userId);

        expect(res.id).toBe(userId);
    });

    it('shoudl not find user by id',()=>{
        const userId = '7';
        const res = users.getUser(userId);

        expect(res).toBeFalsy();
    });

    it('should return a list of uniq rooms',()=>{
        const rooms =users.getRoomsList();
        
        expect(rooms).toEqual([ 'Node Course', 'React Course' ]);
    });
});