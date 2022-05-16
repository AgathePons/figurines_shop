const dataMapper = require('../dataMapper');

const mainController = {
  leftMenu: async (req, res, next) => {
    try {
      const numberByCategory = await dataMapper.getNumberByCategory();
      res.locals.leftMenu = numberByCategory;
      next();
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  },
  // méthode pour la page d'accueil
  homePage: async (req, res, next) => {
    const category = req.query.category;
    //! log
    console.log('CATEGORY:', category);
    try {
      const figurines = await dataMapper.getAllFigurines(req.query.category);
      if (figurines) {
        res.render('accueil', {
          figurines
        });
      } else {
        next();
      }
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  },
  // méthode pour la page article
  articlePage: async (req, res, next) => {
    const id = req.params.id;
    try {
      const figurine = await dataMapper.getOneFigurineNew(id);
      if (figurine) {
        res.render('article', figurine);
      } else {
        next();
      }
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  }
};

module.exports = mainController;
