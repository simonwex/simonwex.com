const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

if (process.env.NODE_ENV === 'development') {
  const nodemon = require('nodemon');

  nodemon({
    script: 'index.js',
    ext: 'js html css',
    ignore: ['public/'],
    env: { NODE_ENV: 'development' },
  });

  nodemon.on('start', () => {
    console.log('Server has started');
  });

  nodemon.on('restart', () => {
    console.log('Server restarted due to file changes');
  });
}