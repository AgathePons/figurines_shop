const middlewares = {
  bookmarks: (req, res, next) => {
    if (!req.session.bookmark) {
      req.session.bookmark = [];
    }
    next();
  }
};

module.exports = middlewares;