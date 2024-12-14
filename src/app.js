import express from "express"
import cookieParser from "cookie-parser";
import cors from 'cors'
const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"10kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.use(cookieParser());



// Routes Import 
import userRouter from './routes/user.routes.js'


// Routes declaration 

// Here by doing this it will give control to userController where we can define futher router supppse if register route is there then url will be http.../api/v1/users/register, 
// if login http.../api/v1/users/login this w can make more router in 
// user control by at  one point user, which we have to declare once


app.use('/api/v1/users', userRouter);

export {app} 