const express = require('express');
const cors = require('cors');
const mock = require('./mock.json');
const logger = require('morgan');
const chalk = require('chalk');
const app = express();
const port = 8080;

// middleware
app.use(logger('combined'));
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.send('Hello tacocat!');
});

app.get('/api', (req, res) => {
  res.json(mock);
})

// start server
app.listen(port, () => {
  console.log(chalk.blue(`server started on port ${port}`));
});
