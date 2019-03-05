const express = require('express');
const bodyParser = require('body-parser');
const websites = require('./routes/websites');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hi Maciek');
});

app.use('/v3/websites', websites );

app.listen(port, () => console.log(`Server listen on ${port}`));
