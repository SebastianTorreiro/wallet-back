// const { Product, User } = require('./db.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
// Sincronizando 
conn.sync({ force: true }).then( async () => {


  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});