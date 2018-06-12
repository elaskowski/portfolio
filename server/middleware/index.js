const bodyParser = require('body-parser');
const morgan = require('morgan');
//use morgan

export default [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];