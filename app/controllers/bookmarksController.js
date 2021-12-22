const { redirect } = require('statuses');
const dataMapper = require('../dataMapper');

const bookmarksController = {
  // méthode pour afficher les favoris
  bookmarksPage: async (req, res) => {
    if (!req.session.bookmark) {
      req.session.bookmark = [];
    } 
    const favorites = req.session.bookmark;
    res.render('favoris', {favorites});
  },

  addBookmark: async (req, res) => {
    const id = req.params.id;
    
    if (!req.session.bookmark) {
      req.session.bookmark = [];
    } 
    req.session.bookmark.push(await dataMapper.getOneFigurine(id));
    res.redirect('/bookmarks');
  }
};

module.exports = bookmarksController;
