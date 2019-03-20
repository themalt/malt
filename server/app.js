const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const websites = require('./routes/websites');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
	res.send('Websites mock API');
});

app.use('/v1/websites', websites );

app.listen(port, () => console.log(`Server listen on ${port}`));
