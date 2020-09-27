const yargs = require('yargs')

const notes = require('./notes-util');

yargs.command({
    command: 'add',
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})
.argv

yargs.command({
    command: 'remove',
    handler: argv => {
        notes.removeNote(argv.title)
    }
})
.argv

yargs.command({
    command: 'read',
    handler: argv => {
        notes.readNote(argv.title)
    }
})
.argv


yargs.command({
    command: 'list',
    handler: argv => {
        notes.listNotes()
    }
})
.argv