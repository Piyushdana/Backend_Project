// require('dotenv').config({path:'./env'}) we can do this way also it will totally work but to keep consistence with import statement we didi other by making changes in package.json script and by import dot env through import then changes made below by configuring it

import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{

    app.on("error",(error)=>{
        console.log('Error Occured while Connecting:',error);
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server Running on Port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Connection failed with DataBase",err);
})

  
