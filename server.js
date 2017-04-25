const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');
const app = express();
const port = 8080;

app.use(logger('combined'));

app.get('/', (req, res) => {
  res.send('Hello tacocat!');
});

app.get('/api', (req, res) => {
  res.json(require('./mock.json'));
})

app.listen(port, () => {
  console.log(chalk.blue(`server started on port ${port}`));
});
