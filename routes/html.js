const html = require('express').Router();
const path = require('path');


//serves up my index.html file
html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//serves up my notes.html file
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = html