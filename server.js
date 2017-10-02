const path = require('path');
const express = require('express');
const app = express();

// Server routes must go here!!!
app.get('/api/something', (req, res) => {
  res.send({ data: 'hello!' });
});

if(process.env.NODE_ENV === 'production') {
  // production
  // get all static data from 'dist' directory
  app.use(express.static('dist'));

  // SPA specific code!!!
  // any get requests will be served with index.html files
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  // alert user - to use webpack dev server
  app.get('*', (req, res) => {
    res.json({
      error: 'In development mode - routes which don\'t match api/* should be handled by webpack-dev-server'
    });
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));