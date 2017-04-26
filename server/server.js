const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const chalk = require('chalk');
const app = express();
const port = 8080;
const mock = require('./mock.json');

// middleware
app.use(logger('combined'));
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.send('use /api for mock db endpoint');
});

app.get('/api', (req, res) => {
  res.json(mock);
})

// start server
app.listen(port, () => {
  console.log(chalk.blue(`server started on port ${port}`));
});
