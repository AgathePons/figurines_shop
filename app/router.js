const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');

const router = express.Router();

// for all routes, middleware leftMenu
router.use('/', mainController.leftMenu);

// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article/:id', mainController.articlePage);

// if url begins with /bookmarks, trigger middleware checkBookmarks to initialize req.session.bookmarks if doesn't exist yet
router.use('/bookmarks', bookmarksController.checkBookmarksSet);
// page favoris
router.get('/bookmarks', bookmarksController.bookmarksPage );

router.get('/bookmarks/add/:id', bookmarksController.addBookmark);
router.get('/bookmarks/delete/:id', bookmarksController.removeBookmark);

// on exporte le router 
module.exports = router;