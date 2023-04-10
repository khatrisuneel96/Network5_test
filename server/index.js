const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
mongoose.set('strictQuery', true);

const postRoutes2 = require('./routes/posts');
const loginRoutes = require('./routes/loginRoutes');
const messageRoutes = require('./routes/messageRoutes');
const pageRoutes = require('./routes/pageRoutes');
const emailRoutes = require('./routes/emailRoutes');
const calendarRoutes = require('./routes/calendarRoutes');
const webhookRoutes = require('./routes/webhookRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
  }, 
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes2);
app.use('/login', loginRoutes);
app.use('/messages', messageRoutes);
app.use('/pages', pageRoutes);
app.use('/email', emailRoutes);
app.use('/calendar', calendarRoutes);
app.post('/webhook', webhookRoutes);
app.use('/analytics', analyticsRoutes);
app.use('/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/profiles', profileRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()  => server.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));