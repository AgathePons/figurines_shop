// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const router = require('./app/router');

const PORT = process.env.PORT || 5000;

const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(session({
  // doc express-session : npmjs.com/package/express-session
  secret: 'MonSup3rS!t3d3F!gur!nes',
  resave: true,
  saveUninitialized: true,
  cookie : {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

app.use(express.static('integration'));

app.use(router);

app.use((req, res) => {
  res.status(404).render('notFound');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
