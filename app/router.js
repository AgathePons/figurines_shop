const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');
const middlewares = require('./controllers/middlewares');

const router = express.Router();

router.use(middlewares.bookmarks);
router.use(middlewares.sideMenu);

// page d'accueil
router.get('/', mainController.homePage);

router.get('/:category', mainController.categoryPage);
// page article
router.get('/article/:id', mainController.articlePage);

console.log('avant bookmarks');
//! Problème :
router.get('/bookmarks', bookmarksController.bookmarksPage);
/* router.use((req, res) => {
  res.send('test');
}); */
console.log('après bookmarks');

router.get('/bookmarks/add/:id', bookmarksController.addBookmark);
router.get('/bookmarks/delete/:id', bookmarksController.deleteBookmark);

// on exporte le router 
module.exports = router;