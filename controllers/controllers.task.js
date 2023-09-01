const Items = require('../models/models.task');
const getAllItems= async (req,res) =>{
    try{
        const items = await Items.find();
        res.status(200).json(items);
        }catch(error){
            next(error);
            }
}

const createItems= async(req,res,next) =>{
    try{
         await Items.create(req.body)
        res.status(201).json({message:`created `});
        }catch(error){
            next(error);
            }
}


const getItems= async (req,res,next) =>{
    try {
        const {id:itemsID} = req.params;
        const items = await Items.findOne({_id:itemsID});
        if(!items){
          return res.status(404).json({message:`No such id : ${itemsID}`})
             };
            res.status(200).json({items})
            } catch (err) {
                next(err);
                };
}


const updateItems= (req,res) =>{
    res.json('update items');
}


const deleteItems= (req,res) =>{
    res.json('delete items');
}
module.exports = {getAllItems , createItems  ,getItems   ,updateItems    ,deleteItems } ;