const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    try {
      const figurines = await dataMapper.getAllFigurines();
      res.render('accueil', {
        figurines
      });
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  },

  // méthode pour la page article
  articlePage: (req, res) => {
    res.render('article');
  }

};


module.exports = mainController;
