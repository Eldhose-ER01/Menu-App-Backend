const Products=require('../model/Menu')

//***********Adding Menu Items*********/
const AllproductList=async(req,res)=>{
    try {
        console.log("hiii");
        
        console.log(req.body);
        
        const { menuName, menuTitle, menuDesc, price } = req.body; 
        const newProduct = new Products({ menuName, menuTitle, menuDesc, price });
        
        await newProduct.save();
        
            res.status(200).json({success:true,message:"data submitted"})
       
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"something went wrong"})
    }
}
//***********Take the Menu Items*********/

const Menuitems=async(req,res)=>{
    try {
        const findthedata=await Products.find()
        if(findthedata){
            res.status(200).json({success:true,data:findthedata,message:"find the values"})
        }else{
            res.status(201).json({success:false,message:"values is not find"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"something went wrong"})
    }
}

module.exports={
    AllproductList ,
    Menuitems
}