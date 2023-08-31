const Items = require('../models/models.task');
const getAllItems= (req,res) =>{
    res.json('all items');
}

const createItems= async(req,res,next) =>{
    try{
         await Items.create(req.body)
        res.status(201).json({message:`created `});
        }catch(error){
            next(err);
            }
}


const getItems= (req,res) =>{
    res.json({id: req.params.id});
}


const updateItems= (req,res) =>{
    res.json('update items');
}


const deleteItems= (req,res) =>{
    res.json('delete items');
}
module.exports = {getAllItems , createItems  ,getItems   ,updateItems    ,deleteItems } ;