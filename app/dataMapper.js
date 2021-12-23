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
};

module.exports = dataMapper;