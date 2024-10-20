const express = require('express');
const cors = require('cors');
require('dotenv').config();


// starting the port 
const PORT = process.env.PORT
const app = express();
const server = app.listen(PORT,()=>console.log(`PORT IS LISTENING AT THE PORT ${PORT}`))

// middeware to connect frontend and backend 

app.use(cors());

// starting the socket 

const io = require('socket.io')(server);

io.on('connection',()=>console.log('A new conneection is build'))