/* From Object to JSON */

// let obj = { 
//     name: 'Ivan'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


/* From JSON to Object */

// let personString = '{"name":"Ivan","age": 22}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name)

const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);