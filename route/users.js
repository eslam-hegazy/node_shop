const express=require('express');
const Users=require('../models/users');
const mongoose=require('mongoose');
const router=express.Router();
/////////////insert Users
router.post('/',(req,res,next)=>{
    const User=new Users({
        _id:mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    User.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
    res.status(200).json({
        message:"Add New User",
        createUser:User
    });
});
////////////////get Users
router.get('/',(req,res,next)=>{
    Users.find().exec().then(result=>{
        res.status(200).json(result.reverse());
    }).catch(err=>{
        res.status(200).json({
            message:err
        });
    });
});

//////////////search User
router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    Users.findById(id).exec().then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(200).json({
            message:err,
        });
    });
});

///////////////Delete User
router.delete('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    Users.remove({
        _id:id,
    }).then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(200).json({
            error:err,
        });
    });
});
module.exports=router;