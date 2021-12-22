const dataMapper = require('../dataMapper');

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: async (req, res) => {
    res.render('favoris');
  },

  addBookmark: async (req, res) => {
    res.redirect('/bookmarks');
  }

};

module.exports = bookmarksController;
