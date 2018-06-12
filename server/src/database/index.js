const Sequelize = require('sequelize');

const db = new Sequelize('portfolio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    acquire: 30000,
    idle: 10000,
    define: {
      timestamps: true,
    },
  },
});

db.authenticate().then(() => {
  console.log('You are connected to the Portfolio database');
}).catch((err) => {
  console.log('Unable to connect to the database:', err);
});

module.exports = db;

console.log(5 + 24);

