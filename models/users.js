const mongoose=require('mongoose');
const Users=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
});
module.exports=mongoose.model('Users',Users);