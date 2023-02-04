import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import loginRoutes from './routes/loginRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import fbPageRoutes from './routes/fbPageRoutes.js'
import emailRoutes from './routes/emailRoutes.js'
import calendarRoutes from './routes/calendarRoutes.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes)
app.use('/login', loginRoutes)
app.use('/messages', messageRoutes)
app.use('/pages', fbPageRoutes)
app.use('/email', emailRoutes)
app.use('/calendar', calendarRoutes)

const CONNECTION_URL = 'mongodb+srv://vassardog:PqjUhp2bYgb3d8Vj@cluster0.kl3sctu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()  => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
