const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    try {
      const figurines = await dataMapper.getAllFigurines();
      console.log(figurines);
      res.render('accueil', {
        figurines
      });
    }catch(error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  },
  // méthode pour la page article
  articlePage: async (req, res) => {
    const id = req.params.id;
    try {
      const figurine = await dataMapper.getOneFigurine(id);
      console.log(figurine);
      res.render('article', {
        figurine
      });
    }catch(error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  }
};

module.exports = mainController;
