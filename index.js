const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')



app.use(cors());
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MonGo_url).then(()=>{

    console.log("iiiiiii DB CONNECTED");
})





app.use('/',require('./Routes/products'))


app.listen(3000,()=>{
    console.log("working");
})
