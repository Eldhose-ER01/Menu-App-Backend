const express=require('express')
const productsRoutes=express()
const ProductsController=require('../controller/products')

productsRoutes.post('/menudatas',ProductsController.AllproductList)
productsRoutes.get('/alldatas',ProductsController.Menuitems)


module.exports=productsRoutes;