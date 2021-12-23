const path = require('path');

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
    res.render('favoris');
  }

};

module.exports = bookmarksController;
