// fs.appendFileSync('notes.txt', '\nMy name is Mohamad.');
// const validator = require('validator');
// const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.0.0');

yargs.command({
    command: 'add',
    describe: 'add a notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'read a notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
});


yargs.command({
    command: 'list',
    describe: 'list a notes',
    handler() {
        notes.listNotes();
    }
});

yargs.parse();