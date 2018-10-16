const express = require('express');
const path = require('path');
const secure = require('ssl-express-www');

const app = express();

// Force SSL
app.use(secure);
app.use(express.static(__dirname + '/dist/ct-blooom'));

app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/dist/ct-blooom/index.html'));
});

app.listen(process.env.PORT || 8090);
