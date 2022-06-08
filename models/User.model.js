const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema

const  UserSchema  = new Schema({

names:{type:String,require:true},
phone:{type:String,required:true},
email:{type:String,required:true,unique:true},
national_id_number:{type:String,required:true,unique:true},
birth_date:{type:Date},
age:{type:Number},
province:{type:String,required:true},
district:{type:String,required:true},
sector:{type:String,required:true},
cell:{type:String,required:true},
village:{type:String,required:true},
});


const userModel  = mongoose.model('userModel',UserSchema);

module.exports = userModel;
