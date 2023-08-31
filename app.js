const express = require('express');
const app = express();
const PORT= 3000;
const tasks = require('./routes/routes.task.js');

//middleware
app.use(express.json() )

//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager');
})
app.use("/api/v1/tasks",tasks)

app.listen(PORT,(err)=>{
    if(err){
        console.log('Error',err.message);
    }else{
        console.log(`server is listening on the :${PORT}`);
    }
    
})