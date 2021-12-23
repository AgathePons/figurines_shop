const client = require('./database');

const dataMapper = {
  getAllFigurines: async () => {
    const queryFigurines = 'SELECT * FROM figurine;';
    return (await client.query(queryFigurines)).rows;
  },
  getOneFigurine: async (id) => {
    const queryOneFigurine = `SELECT * FROM figurine WHERE id=${Number(id)};`;
    return (await client.query(queryOneFigurine)).rows[0];
  },
  getOneFigurineNew: async (id) => {
    const query = `
      SELECT f.*, r.* FROM figurine f 
      JOIN review r ON r.figurine_id = f.id 
      WHERE f.id = ${Number(id)};`;
    // stock all results in temp const
    const results = (await client.query(query));
    if (results.rows.length > 0) { // if there are elements in response
      return {
        // return an unique element
        figurine: results.rows[0],
        reviews: results.rows
      };
    } else { // else return null
      return null;
    }
    
  }
};

module.exports = dataMapper;