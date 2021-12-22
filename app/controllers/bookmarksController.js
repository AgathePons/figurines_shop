const { redirect } = require('statuses');
const dataMapper = require('../dataMapper');

const bookmarksController = {
  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
 
    const favorites = req.session.bookmark;
    res.render('favoris', {favorites});
  },
  addBookmark: async (req, res) => {
    const id = req.params.id;

    req.session.bookmark.push(await dataMapper.getOneFigurine(id));
    res.redirect('/bookmarks');
  },
  deleteBookmark : (req, res) => {
    req.session.bookmark = req.session.bookmark.filter(element => parseInt(element.id) !== parseInt(req.params.id));
    res.redirect('/bookmarks');
  }
};

module.exports = bookmarksController;
