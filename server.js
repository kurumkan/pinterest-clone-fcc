const path = require('path');
const express = require('express');
const app = express();

app.get('/api/pins', (req, res) => {
  const pins = [
    {
      id: '0',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '1',
      img: 'src/images/200x400.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '2',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '3',
      img: 'src/images/300.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '4',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '5',
      img: 'src/images/900x900.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '6',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '7',
      img: 'src/images/300.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '8',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '9',
      img: 'src/images/300.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '10',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '11',
      img: 'src/images/300.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '12',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '13',
      img: 'src/images/300.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '14',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '15',
      img: 'src/images/300.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '16',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '17',
      img: 'src/images/300.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '18',
      img: 'src/images/350.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    }
  ];

  const limit = +req.query.limit || 10;
  const offset = +req.query.offset || 0;

  if(offset >= pins.length) {
    res.json({
      pins: [],
      pinsLeft: 0
    });
  } else {
    const pinsLeft = pins.length  - offset - limit;
    res.json({
      pins: pins.slice(offset, offset + limit),
      pinsLeft: pinsLeft < 0 ? 0 : pinsLeft
    });
  }
});

if(process.env.NODE_ENV === 'production') {
  // production
  // get all static data from 'dist' directory
  app.use(express.static('dist'));

  // SPA specific code!!!
  // any get requests will be served with index.template.ejs files
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