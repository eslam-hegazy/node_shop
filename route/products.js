const express=require('express');
const mongoose = require('mongoose');
const Products=require('../models/products');
const router=express.Router();
/////////////////////get products
router.get('/',(req,res,next)=>{
    Products.find().exec().then((doc)=>{
        console.log(doc);
        res.status(200).json(doc.reverse());
    }).catch((err)=>{
        console.log(err);
        res.status(200).json({
            error:err,
        });
    });
});
/////////////////////insert product
router.post('/',(req,res,next)=>{
    const product=new Products({
        _id:mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price,
        des:req.body.des,
    });
    product.save().then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
    res.status(200).json({
        message:"Insert Product Successfully",
        createProduct:product,
    });
});

//////////////////////search
router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    Products.findById(id).exec().then((doc)=>{
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({
                message:"Product Not Found",
            });
        }
    }).catch((err)=>{
        res.status(200).json({
            message:err,
        });
    });
});
///////////////////delete
router.delete('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    Products.remove({
        _id:id,
    }).exec().then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(200).json({
            error:err,
        });
    });
});
module.exports=router;