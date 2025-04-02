const http = require("http");
const express = require ("express");
const path = require("path")
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

//instace of Server
const io = new Server(server);   //here io handles the sockets

//socket.io
io.on('connection', (socket) =>{
    console.log('A new user has connected', socket.id)
    socket.on('user-message', message =>{     //frontend message send to all
        console.log('A new user message', message);
        io.emit('message', message)
    })
})


app.use(express.static(path.resolve("./public")));


app.get("/", (req, res)=>{
    return res.sendFile("/public/index.html")
})



server.listen(9000, ()=> console.log(`Server started at PORT:9000`));


