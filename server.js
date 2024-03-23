import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import swal from 'sweetalert'
import jwt from 'jsonwebtoken'
import mysql2 from 'mysql2'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
import session from 'express-session'
config()



const PORT = process.env.PORT
const app = express()
app.use(cors({
    origin: 'mycapstone-27eaa.firebaseapp.com',
    // origin: 'http://localhost:8080'
    // origin: 'http://capstone-social-app.onrender.com'
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

const posts = [
{
username: 'Jason',
title: 'Post 1'
},
{
    username: 'Jim',
    title: 'Post 2'
    }
]
app.get('/posts', (req,res)=> {
res.json(posts.filter(post => post.username === req.user.name))
}),

app.post('/login', (req, res)=> {
// Authenticate User

const username = req.body.username
const user = { name: username }


const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
res.json({ accessToken: accessToken })
})

function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if (err) return res.sendStatus(403)
        req.user = user
    next();
})
};

app.use('/products', productsRouter)
app.use('/users', usersRouter),


app.listen(PORT, ()  =>{
    console.log('http://localhost:'+ PORT);
})