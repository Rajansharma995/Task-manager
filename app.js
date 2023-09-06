const express = require('express');
const app = express();
const tasks = require('./routes/routes.task.js');
const connectDB = require('./config/config.db.js');
const notFound = require('./middleware/middleware.error.js');
require('dotenv').config()

connectDB();
//middleware
app.use(express.json())

//routes

app.use("/api/v1/tasks",tasks)

app.use(notFound);

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log('Error',err.message);
    }else{
        console.log(`server is listening on the :${process.env.PORT}`);
    }
    
})