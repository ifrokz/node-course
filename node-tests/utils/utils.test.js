const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('Should add two numbers', () => {
            const result = utils.add(33, 11);
        
            expect(result).toBe(44).toBeA('number');
        });
    });

    
    // Hay que pasar el argumento done en los test asíncronos para ejecutarlo cuando el test acabe.
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should async square two numbers', (done) => {
        utils.asyncSquare(8, (res) => {
            expect(res).toBe(64).toBeA('number');
            done();
        });
    });
    
    it('Should square a number', () => {
        const result = utils.square(3);
        
        expect(result).toBe(9).toBeA('number');
    });
    
    it('Should set fisrtName and lastName', () => {
        const user = ({
            location: 'Philadelphia',
            age: 25
        });
        const res = utils.setName(user, 'Ivan Ruiz');
        
        expect(res).toInclude({
            firstName: 'Ivan',
            lastName: 'Ruiz'
        })
    });
    
    // it('Shoud expect some values', () => {
    //     // expect(12).toNotBe(12);
    //     // expect({name: 'Ivan'}).toNotEqual({name: 'Ivan'});
    //     // expect([2,3,4,5,6]).toExclude(5);
    //     // expect([2,3,4,5,6]).toInclude(5);
    //     // expect({
    //     //     name: 'Ivan',
    //     //     age: 22,
    //     //     location: 'Valencia'
    //     // }).toInclude({
    //     //     age: 21
    //     // });
    // });
});
