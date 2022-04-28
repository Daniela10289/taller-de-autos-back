const express = require('express');
const routerApi = require('./routes');
const { checkApiKey } = require( './middlewares/authHandler');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server en express');
  })

// require('./utils/auth');

routerApi(app);

app.listen(port, () => {
console.log('Mi port: ' + port);
});
