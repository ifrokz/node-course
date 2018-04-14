const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const argv = yargs
    .command('add','Add a new note.', {
        title: titleOptions,
        body: {
            describe: 'The body of note.',
            demand: true,
            alias: 'b'
        }
    })
    .command('list','List of notes.')
    .command('read','Read a note.',{
        title: titleOptions
    })
    .command('remove', 'Remove a note.',{
        title: titleOptions
    })
    .help()
    .argv;
const command = argv._[0];

if ( command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if(_.isObject(note)){ 
        notes.logNote(note);
    } else {
        console.log('Note title taken.');
    }
} else if(command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        console.log('---');
        notes.logNote(note);
    });
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else if ( command === 'read') {
    const note = notes.getNote(argv.title);
    if(_.isObject(note)){
        notes.logNote(note);
    } else{
        console.log("Note not found!");
    }
} else {
    console.log('Command not recognised.');
};