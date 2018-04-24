const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage()', ()=>{
    it('should generate the correct message object', ()=>{
        const from = 'Author';
        const text = 'Some text';
        const message = generateMessage(from, text);

        expect(message).toMatchObject({text,from});
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage()', () => {
    it('should generate hte correct message ebject', () => {
        const from = 'Author';
        const latitude = 1;
        const longitude = -1;
        const url = 'https://www.google.com/maps?q='+latitude+','+longitude;

        const message = generateLocationMessage(from, latitude, longitude);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url})
    });
});