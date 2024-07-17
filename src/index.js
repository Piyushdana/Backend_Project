// require('dotenv').config({path:'./env'}) we can do this way also it will totally work but to keep consistence with import statement we didi other by making changes in package.json script and by import dot env through import then changes made below by configuring it

import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

  
