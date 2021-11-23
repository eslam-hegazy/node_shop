const mongoose=require('mongoose');
const products=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,require:true},
    price:Number,
    des:String,
});
module.exports=mongoose.model('Products',products);