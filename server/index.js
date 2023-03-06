import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

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

const CONNECTION_URL = 'mongodb+srv://vassardog:PqjUhp2bYgb3d8Vj@cluster0.kl3sctu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()  => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
