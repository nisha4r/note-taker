const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('../helpers/uuid');

// GET Route for retrieving all the notes from db.json
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for POST /api/notes save new note and , add it to the db.json file, and then return the new note
notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;