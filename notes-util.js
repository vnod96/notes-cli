const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addNote = (title, body) => {
    const notes = loadNotes()
    const dup = notes.find(note => note.title === title)
    if (!dup) {
        notes.push({
                title,
                body
            })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note saved!'))
    } else {
        console.log(chalk.red.inverse('Duplicate note found.'))
    }
}

const removeNote = title => {
    const notes = loadNotes()
    const notesToSave = notes.filter(note => note.title !== title)
    if (notes.length > notesToSave.length) {
        saveNotes(notesToSave)
        console.log(chalk.green.inverse('Note Removed.'))
    } else {
        console.log(chalk.red.inverse('Note not found.'))      
    }
}

const readNote = title => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)
    if(note){
        console.log(chalk.blue.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found.'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveNotes = notes => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}