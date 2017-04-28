const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.listen(port, () => {
  console.log(`Look on http://localhost: ${port}`);
});
