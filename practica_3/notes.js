const log = require('log-beautify');
const fs = require('fs');

log.setColors({
    custom_delete: "yellow",
    custom_title: "cyan",
    custom_body: "white"
});
log.setSymbols({
    custom_delete: "🔥 ",
    custom_title: "🖍️ ",
    custom_body: "🗒️ "
});

const saveNotes = notes => {
    const dataJSON = JSON.stringify({ notes: notes });
    fs.writeFileSync('notes.json', dataJSON);
    log.success('Success: Notes saved');
}

const loadNotes = () => {
    try {
        log.info('Info: Loading Notes');
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const parsedJSON = JSON.parse(dataJSON);
        return parsedJSON.notes;
    } catch {
        log.warning('Warning: Notes are empty');
        return [];
    }
}

const addNote = props => {
    const { title, body } = props;
    const notes = loadNotes();

    if (!notes.find((note) => note.title === title)) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
    } else {
        log.warning('Warning: Note title already exists');
    }
};

const deleteNote = props => {
    const { title } = props;
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        log.warning('Warning: Note deleted');
        log.custom_delete(title);
        saveNotes(notesToKeep);
    } else {
        log.error('Error: Note not found');
    }    
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length === 0) {
        log.warning('Warning: Notes are empty');
    } else {
        notes.forEach((note) => {
            log.custom_title(note.title);
        })
    }
}

const readNote = props => {
    const { title } = props;
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        log.info('Info: Note found');
        log.custom_title(note.title);
        log.custom_body(note.body);
    } else {
        log.error('Error: Note not found');
    }
}

module.exports = {
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
}
