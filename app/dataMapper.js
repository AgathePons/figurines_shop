const client = require('./database');

const dataMapper = {
  getAllFigurines: async () => {
    const queryFigurines = 'SELECT * FROM figurine;';
    return (await client.query(queryFigurines)).rows;
  },
  getOneFigurine: async (id) => {
    const queryOneFigurine = `SELECT * FROM figurine WHERE id=${id};`;
    return (await client.query(queryOneFigurine)).rows[0];
  },
  getReviews: async (id) => {
    const queryReviews = `SELECT * FROM review WHERE figurine_id=${id};`;
    return (await client.query(queryReviews)).rows;
  },
  getCategoriesAndNumber: async () => {
    const query = 'SELECT category, COUNT(name) AS number FROM figurine GROUP BY category';
    return (await client.query(query)).rows;
  },
  getFigurinesByCategory : async (category) => {
    const sql = `SELECT * FROM figurine WHERE category='${category}'`;
    return (await client.query(sql)).rows;
  }
};

module.exports = dataMapper;