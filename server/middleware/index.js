const bodyParser = require('body-parser');
const morgan = require('morgan');

export default [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];