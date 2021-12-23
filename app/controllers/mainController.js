const dataMapper = require('../dataMapper');

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (req, res, next) => {
    try {
      const figurines = await dataMapper.getAllFigurines();
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
      const figurine = await dataMapper.getOneFigurine(id);
      if (figurine) {
        res.render('article', {
          figurine
        });
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
