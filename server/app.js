const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req,res) => {
	res.send('Hi Maciek');
});

app.listen(port, () => console.log(`Server listen on ${port}`));
