const notes = require('express').Router();
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// var database = require('../db/db.json')

notes.get('/', (req, res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))

}
);

notes.post('/', (req, res) =>
 {
    const {title, text} = req.body;

    const newNote = {
        title: title,
        text: text,
    }
    
    readAndAppend(newNote, './db/db.json')

    const response = {
        status: 'success',
        body:  newNote,
    };
  
    res.json(response);

 }
)



module.exports = notes;

