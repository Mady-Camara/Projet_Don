const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoute = require('./Routes/stuff');
const router = require('./Routes/stuff');
const userRoute = require('./Routes/user');
const path = require('path');

let app = express();

mongoose.connect('mongodb+srv://Mady:Camara@cluster0.f9srj.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());

app.use('/api/stuff', stuffRoute);
app.use('/api/auth', userRoute);
app.use('/images/', express.static(path.join(__dirname, 'images')));

module.exports = app;