const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');
const { clog } = require('./middleware/clog');

const PORT = process.env.port || 3001;

app.use(clog);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);