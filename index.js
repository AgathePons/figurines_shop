// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();


const express = require('express');

const session = require('express-session');
// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.use(session({
  // doc express-session : npmjs.com/package/express-session
  // secret: generate the tokens
  secret: 'MonSup3rS!t3d3F!gur!nes',
  // session auto save at the end of the request
  resave: true,
  // even if empty, save the session
  saveUninitialized: true,
  cookie : {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
