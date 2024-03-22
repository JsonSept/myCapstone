import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
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
    origin: 'http://localhost:8080',
    // origin: 'http://capstone-social-app.onrender.com'
    // credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use(
    session({
    secret: 'key that will sign cookie',
    
    resave: false,
    saveUninitialized: false
})
);

app.use('/products', productsRouter)
app.use('/users', usersRouter)


app.post('/register', async (req,res) => {
    const { username , email , password} = req.body;

    let user = await  UserModel.findOne({email});

    if(user) {
        return res.redirect('/register');
    }

    const hashedPsw = await bcrypt.hash(password, 12);
    user = new UserModel({
        username,
        email,
        password : hashedPsw
    });
    await user.save();

    res.redirect('/login')
});


app.post('/users',(req,res)=>{
    const {username,password} = req.body
    bcrypt.hash(password,10, async (err,hash)=>{
        if(err) throw err
        await addUser(username,hash)
        
        res.send(await addUser(username,hash))
    })
    res.send({
       msg: "You have registered successfully"
    })
})
const auth = async (req,res,next) => {  //middleware (req,res,next())
const {password,username} = req.body
const hashedPassword = await checkUser(username )
bcrypt.compare(password,hashedPassword, (err,result)=>{
    if(err) throw err
    if(result === true){
        const {username} = req.body
    const token = jwt.sign({username:username},
    process.env.SECRET_KEY,{expiresIn:'1h'})
    res.cookie('jwt',token,{httpOnly:false}) //true only backend user can access on frontend--- if it is set to true than only the backend user can set the
    res.send({
        token:token, //first one is the token ,second one is the value of the token
        msg:'You have logged in!!! YAY!'
    })
    next()
    }else{
        res.send({msg:'The username or password is incorrect'})
    }
})
}
    app.post('/login',auth, (req,res)=>{
        res.send({
            msg:'You have logged in!!! YAY!'
        })
    })
    app.delete('/logout',(req,res)=>{
        res.clearCookie('jwt')
        res.send({
            msg:'You have logged out'
        })
    })



app.listen(PORT, ()  =>{
    console.log('http://localhost:'+ PORT);
})