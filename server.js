const express = require('express');
const request = require('request');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', process.env.ORIGIN || '*');
	next();
});

app.get('/superheroproxy', (req, res) => {
	const id = req.query['id'];
	const url = `https://superheroapi.com/api/10114226739421973/${id}/image`;

	request(url).pipe(res);
});

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	app.use(express.static('client/build'));
}

app.listen(port, () => console.log(`superheroapi-cors app listening on port ${port}!`));
