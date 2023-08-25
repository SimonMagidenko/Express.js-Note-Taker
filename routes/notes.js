const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const dbFile = require('../db/db.json');

notes.get('/notes', (req, res) => {
    res.json(dbFile)
});

notes.post('/notes', (req, res) => {
    const { title, text } = req.body;
    const randomID = Math.floor(Math.random() * 2400)

    if (req.body) {
        const newNote = {
            id: randomID,
            title,
            text,
        }
        console.log(req.body);

        dbFile.push(newNote);

        readAndAppend(newNote, './db/db.json');

        res.sendStatus(200)
    } else {
        res.error('Note failed to create')
    }
});
// stringify dbFile and write it to File





module.exports = notes