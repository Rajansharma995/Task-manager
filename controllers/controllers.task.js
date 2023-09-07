const Items = require('../models/models.task');
const wrapper = require('../middleware/middleware.wrapper');
const getAllItems= wrapper(async (req,res,next) =>{
        const items = await Items.find();
        res.status(200).json(items);
}
)
const createItems= wrapper(async(req,res,next) =>{
         await Items.create(req.body)
        res.status(201).json({message:`created `});
})


const getItems= wrapper(async (req,res,next) =>{
        const {id:itemsID} = req.params;
        const items = await Items.findOne({_id:itemsID});
        if(!items){
          return res.status(404).json({message:`No such id : ${itemsID}`})
             };
            res.status(200).json({items})
})





const deleteItems= wrapper(async (req,res,next) =>{
        const {id: itemsID} = req.params
        const items = await Items.findOneAndDelete({_id: itemsID});
        if (!items ){
            return res.status(404).json({message:`No such id : ${itemsID}`})
        }
         res.status(200).json(items);
})

const updateItems= wrapper(async (req,res,next) => {

        const {id: itemsID} =req.params;
        const items = await Items.findOneAndUpdate({_id: itemsID},req.body,{
            new:true , 
            runValidators: true 
        });
        if (!items )return res.status(404).send(`Items with the given ID not found`);
        res.status(200).json({items});
})


module.exports = {getAllItems , createItems  ,getItems   ,updateItems    ,deleteItems } ;