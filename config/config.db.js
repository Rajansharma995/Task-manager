const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async () =>{
    try{
        await  mongoose.connect(process.env.MONGO_URI);
        console.log('connected to database');
        }catch (err){
            console.error(`${err}`.red)
            }
}


module.exports= connectDB;
