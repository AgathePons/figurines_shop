const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    try {
      const figurines = await dataMapper.getAllFigurines();
      console.log('DANS HOMEPAGE CONTROLLER');
      res.render('accueil', {
        figurines,
      });
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  },
  categoryPage: async (req, res) => {
    const category = req.params.category;
    
    try {
      const figurines = await dataMapper.getFigurinesByCategory(category);
      res.render('accueil', {
        figurines
      });
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  },
  // méthode pour la page article
  articlePage: async (req, res) => {
    const id = req.params.id;
    try {
      const figurine = await dataMapper.getOneFigurine(id);
      const reviews = await dataMapper.getReviews(id);
      res.render('article', {
        figurine,
        reviews
      });
    } catch (error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  }
};

module.exports = mainController;