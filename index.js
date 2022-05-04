const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://mytaller.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));
 
require('./utils/auth');

app.get('/', (req, res) => {
    res.send('Server en express');
  })

routerApi(app);

app.listen(port, () => {
console.log('Mi port: ' + port);
});
