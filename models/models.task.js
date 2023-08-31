const mongoose = require('mongoose');



const itemSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true,'Please add a Name'],
        trim : true,
        maxLength: [20,'Name cannot be more than 20 characters'],
        minLength: [3, 'Name cannot be less than 2 charavters'],
        },
    completed:{
        type:Boolean , 
        default:false
    }
})
module.exports=  mongoose.model("Item",itemSchema);