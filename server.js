const express = require('express');
const path = require('path');
const util = require('util');

const app = express();


app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.port || 8080;

app.listen(port, () => {
	util.log(`...Server up on port: ${port}...`);
});
