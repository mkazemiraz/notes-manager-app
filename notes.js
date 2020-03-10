const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find( note => note.title === title);
    if (duplicateNote){
        console.log(chalk.red('Note title is taken...'));
    }
    else {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New notes added...'));
    }

}

const removeNotes = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title != title);

    saveNotes(notesToKeep);

    notes.length > notesToKeep.length ? console.log(chalk.green('Note removed!')) : console.log(chalk.red('Note not found!'))
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('\nYour notes:\n'));
    notes.forEach((note, i) => {
        console.log(`${i+1}. ${note.title}`);
    });
}

const readNotes = title => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.blue.italic(findNote.title));
        console.log(chalk.white.italic(findNote.body));
    }
    else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', dataJSON);
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};
