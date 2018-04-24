const Sequelize = require('sequelize');

const db = new Sequelize('parkit', 'root', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    acquire: 30000,
    idle: 10000,
    define: {
      timestamps: true
    },
  },
});

db.authenticate().then(() => {
  console.log('You are connected to the ParkIt database');
}).catch(err => {
  console.log('Unable to connect to the database:', err);
});

module.exports = db;