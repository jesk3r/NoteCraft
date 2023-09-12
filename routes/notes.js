const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, deleteFromFile } = require('../helpers/fsUtils');

// var database = require('../db/db.json')

notes.get('/', (req, res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))

}
);

notes.delete('/:id', (req, res) =>{
    const {id} = req.params
    deleteFromFile(id,'./db/db.json')

    const response = {
        status: 'success',
        body:  'deleted note',
    };

    res.json(response);
}   
);

notes.post('/', (req, res) =>
 {
    const {title, text} = req.body;

    const newNote = {
        title: title,
        text: text,
        id: uuidv4()
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

