const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current entry directory
app.use(express.static(`${__dirname}/public`));

// use index.html as the access point
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public`, 'index.html'));
});

app.listen(port);
console.log('Server started');
