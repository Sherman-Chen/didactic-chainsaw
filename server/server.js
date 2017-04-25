const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const chalk = require('chalk');
const app = express();
const port = 8080;

const mock = require('../mock.json');

app.use(logger('combined'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello tacocat!');
});

app.get('/api', (req, res) => {
  // res.send(JSON.stringify(require('../mock.json')));
  res.json(mock);
})

app.listen(port, () => {
  console.log(chalk.blue(`server started on port ${port}`));
});
