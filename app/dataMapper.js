const client = require('./database');

const dataMapper = {
  getAllFigurines: async (category) => {
    // expression ternaire : <condition> ? <si condition vrai> : <si condition fausse>
    // const a = true ? 13 : 14;
    // ternaire version, but quote hell
    //const query = `SELECT * FROM "figurine" ${category ? "WHERE category = '"+ category + "'" : ''}`;

    let sql = 'SELECT figurine.*, ROUND(AVG(review.note)) AS note FROM figurine JOIN review ON figurine.id=review.figurine_id';
    let values = null;

    if (category) {
      sql += ' WHERE category = $1';
      values = [category];
    }

    sql += ' GROUP BY figurine.id;';

    //! log ----
    console.log('CATEGORY in argument:', category);
    console.log('my query:', sql);
    console.log('VALUES:', values);
    //! --------
    return (await client.query(sql, values)).rows;
  },
  getOneFigurine: async (id) => {
    const queryOneFigurine = `SELECT * FROM figurine WHERE id=${Number(id)};`;
    return (await client.query(queryOneFigurine)).rows[0];
  },
  // version with reviews
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
  },
  getNumberByCategory: async () => {
    const sql = 'SELECT category, COUNT(name) as number FROM figurine GROUP BY category;';
    const result = await client.query(sql);
    return result.rows;
  }
};

module.exports = dataMapper;