import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);
const io = new Server(httpServer,{
    cors:{
        origin: '*',
    }
});

const PORT = 4000;

app.get("/api", (req, res)=>{
    res.status(200).json({message:"this is from api"})
});

io.on("connection", (socket:Socket) =>{
    console.log('a user connected');

    socket.on("message", (message: string)=>{
        console.log(message);
       io.emit("message", message); 
    })

    socket.on('disconnect', ()=>{
        console.log(`user disconnected`);
    })
})

httpServer.listen(PORT, ()=>console.log(`server is listening at port ${PORT}`))