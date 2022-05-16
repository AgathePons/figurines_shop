const dataMapper = require('../dataMapper');

const bookmarksController = {
  checkBookmarksSet: (req, res, next) => {
    if (!req.session.bookmarks) {
      req.session.bookmarks = [];
    }
    next();
  },
  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
    res.render('favoris', {
      bookmarks: req.session.bookmarks
    });
  },
  // add fav
  addBookmark: async (req, res) => {
    const id = req.params.id;
    const figInBookmarks = req.session.bookmarks.find(fig => {
      return fig.id === Number(id);
    });
    //! LOG
    console.log('figurine:', figInBookmarks);
    if (!figInBookmarks) {
      try {
        const figurine = await dataMapper.getOneFigurine(id);
        req.session.bookmarks.push(figurine);
      } catch {
        console.error('hmm, an error occured:', error);
        res.status(500).send('Oops!');
      }
    }
    //! LOG
    console.log(req.session.bookmarks);
    res.redirect('/bookmarks');
  },
  removeBookmark: (req, res) => {
    const id = req.params.id;
    req.session.bookmarks = req.session.bookmarks.filter(b => b.id !== Number(id));
>>>>>>> correction
    res.redirect('/bookmarks');
  }
};

module.exports = bookmarksController;

