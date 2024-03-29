const http = require('http');
const express = require('express');
const app = express();
const postsRoutes = require('./routes/posts')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_ACCESS, (req, res)=>{
    console.log('data base connected')
})
app.use(cors());
app.use(express.json())
app.use('/posts', postsRoutes);

app.listen(3001,(req,res)=>{
    console.log(`Server listening to port: ${PORT}`);
});