const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
///////////////////routing
const products=require('./route/products');
const users=require('./route/users');


const app=express();
app.use(morgan('dev'));
mongoose.connect('mongodb+srv://eslam0127499:eslam0127499@cluster0.co4d4.mongodb.net/shop?retryWrites=true&w=majority').then(()=>console.log("Connection...")).catch((err)=>{
    console.log(err);
});
app.use([bodyParser.urlencoded({extended:true}),express.json()]);
app.use('/products',products);
app.use('/users',users);
///////////////////////error
app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status(404);
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message,
        }
    });
});
module.exports=app;