const wrapper = (URL)=>{
    return async(req,res,next)  =>{
        try{
            await URL (req,res,next)
        }catch(err){
            next(err);
        }
    }
}
module.exports = wrapper;