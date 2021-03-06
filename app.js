const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (request, response)=>{
	response.sendFile(path.join(path.resolve(),'index.html'));
});

app.listen(PORT, ()=>{
	console.log(`Listening at ${PORT}`);
});

