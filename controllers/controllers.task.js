const Items = require('../models/models.task');
const getAllItems= async (req,res,next) =>{
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





const deleteItems= async (req,res,next) =>{
    try{
        const {id: itemsID} = req.params
        const items = await Items.findOneAndDelete({_id: itemsID});
        if (!items ){
            return res.status(404).json({message:`No such id : ${itemsID}`})
        }
         res.status(200).json(items);
        }catch(e){
               next(e);
        }
}

const updateItems= async (req,res,next) => {
    try  {
        const {id: itemsID} =req.params;
        const items = await Items.findOneAndUpdate({_id: itemsID},req.body,{
            new:true , 
            runValidators: true 
        });
        if (!items )return res.status(404).send(`Items with the given ID not found`);
        res.status(200).json({items});
        } catch (e) {
            next(e);
            };
}


module.exports = {getAllItems , createItems  ,getItems   ,updateItems    ,deleteItems } ;