const express = require('express');
const app = express();
const tasks = require('./routes/routes.task.js');
const connectDB = require('./config/config.db.js')
require('dotenv').config()

connectDB();
//middleware
app.use(express.json() )

//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager');
})
app.use("/api/v1/tasks",tasks)

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log('Error',err.message);
    }else{
        console.log(`server is listening on the :${process.env.PORT}`);
    }
    
})