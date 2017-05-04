const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000 or http://127.0.0.1:4000');
});
