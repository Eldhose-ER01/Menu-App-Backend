const mongoose=require('mongoose')
const productsSchema=new mongoose.Schema({
    menuName:{
        type:String,
       
    },
    menuTitle:{
        type:String,
        
    },
    menuDesc:{
        type:String,
      
    },
    price:{
        type:String,
        
    },
   
    
    })
    module.exports=mongoose.model("MenuItem",productsSchema)