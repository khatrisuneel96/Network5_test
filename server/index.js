import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { Server } from 'socket.io'   //importing socket.io
import http from 'http'
import * as dotenv from 'dotenv'
dotenv.config()

import postRoutes2 from './routes/posts.js'
import loginRoutes from './routes/loginRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import pageRoutes from './routes/pageRoutes.js'
import emailRoutes from './routes/emailRoutes.js'
import calendarRoutes from './routes/calendarRoutes.js'
import webhookRoutes from './routes/webhookRoutes.js'
import analyticsRoutes from './routes/analyticsRoutes.js'
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/user.js'
import profileRoutes from './routes/profileRoutes.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes2)
app.use('/login', loginRoutes)
app.use('/messages', messageRoutes)
app.use('/pages', pageRoutes)
app.use('/email', emailRoutes)
app.use('/calendar', calendarRoutes)
app.post('/webhook', webhookRoutes)
app.use('/analytics', analyticsRoutes)
app.use('/post', postRoutes)
app.use('/api/user', userRoutes)
app.use('/profiles', profileRoutes)

const server = http.createServer(app)    //setting server

const io = new Server(server, {     //linking socket.io to server
    cors: {
        origin: ["https://localhost:3000","https://aaazzz.xyz"] //cors (add website url as well)
    }, 
})

const CONNECTION_URL = process.env.CONNECTION_URL   //setting connection url
const PORT = process.env.PORT|| 5000; //setting port

io.on("connection", (socket) => {   //starting socket.io
    //console.log(socket.id)
    socket.on('send-message', (message) => {    //creating event to recieve message
        socket.broadcast.emit('recieve-message', message)     //sending message back to client
        console.log(message)
    })
})

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()  => server.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));
