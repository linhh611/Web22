const express = require('express');

const app = express();
app.use(express.static('html&css')); //public file
// Router
app.get('/', (request, response) => {
	const data = {
		name: 'Linh',
		age: 18
	}
	console.log(__dirname + '/html&css/index.html');
	response.sendFile(__dirname + '/html&css/index.html');
});

// Router
app.get('/about', (request, response) => {
	response.sendFile(__dirname+'/html&css/index.html');
});

// http://localhost:6960
const port = 6960;
app.listen(port, function(err) {
	if(err) console.log(err)
	else console.log("Server start success");
});