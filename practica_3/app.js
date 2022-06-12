require('yargonaut')
    .style('blue')
    .font('Small Slant')
    .errors('Calvin S')
    .errorsStyle('red');

const notes = require('./notes');
let yargs = require('yargs');
yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
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
            notes.addNote({ title: argv.title, body: argv.body });
        }
    }
)
yargs.command(
    {
        command: 'delete',
        describe: 'Delete a note based on the title',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
        },
        handler(argv) {
            notes.deleteNote({ title: argv.title });
        }
    }
)
yargs.command(
    {
        command: 'read',
        describe: 'Read a note based on the title',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
        },
        handler(argv) {
            notes.readNote({ title: argv.title });
        }
    }
)
yargs.command(
    {
        command: 'list',
        describe: 'List all notes',
        handler() {
            notes.listNotes();
        }
    }
)
yargs.example('node ./app.js add --title="This Title" --body="This Body"');
yargs.parse();
