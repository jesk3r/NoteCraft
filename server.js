const express = require('express');
const path = require('path');
const api = require('./routes/index.js');


const app = express();

const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)




app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


//GET route of homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


//listening to socket
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);