const express = require('express');
const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.listen(4000, () => {
  console.log('Look on http://localhost:4000');
});
