const getAllItems= (req,res) =>{
    res.json('all items')
}

const createItems= (req,res) =>{
    res.json('create items')
}


const getItems= (req,res) =>{
    res.json('get items')
}


const updateItems= (req,res) =>{
    res.json('update items')
}


const deleteItems= (req,res) =>{
    res.json('delete items')
}
module.exports = {getAllItems , createItems  ,getItems   ,updateItems    ,deleteItems } ;