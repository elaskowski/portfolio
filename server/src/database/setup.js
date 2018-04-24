const db = require('./index');

db.sync({ force: true })
  .then(() => {
    console.log('db synced');
    process.exit();
  })
  .catch(() => {
    console.log('error syncing database');
  });