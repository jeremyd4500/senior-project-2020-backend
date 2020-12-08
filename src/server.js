const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const { getPort } = require('./utils');

require('dotenv').config();
const app = express();

app.use(cors({ origin: true }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('build'));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

const server = {
	name: 'MyCare',
	port: getPort(),
	version: '1.0.0'
};

app.listen(server.port, () => {
	console.log(`${server.name} listening on port ${server.port}`);
});
