const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const php = require('./php/contact.php')


app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.post('https://portfolioisthename.herokuapp.com/php/contact.php', (req, res) => {
	res.send(php)
})

app.listen(port);

console.log('Server Started:', port)