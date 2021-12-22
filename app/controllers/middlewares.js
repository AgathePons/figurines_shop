const dataMapper = require('../dataMapper');

const middlewares = {
  bookmarks: (req, res, next) => {
    if (!req.session.bookmark) {
      req.session.bookmark = [];
    }
    console.log('bookmarks middleware', req.session.bookmark);
    next();
  },
  sideMenu: async (req, res, next) => {
    try {
      res.locals.categoriesInfos = await dataMapper.getCategoriesAndNumber();
      console.log('je suis dans side menu');
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
    next();
  },
};

module.exports = middlewares;
