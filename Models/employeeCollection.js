const mongoose=require('mongoose')

const employeeScema=new mongoose.Schema({
    fname:{
        type:String,
        trim:true,
        required:true
    },
    lname:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        minlength:10,
        maxlength:13
    },
    gender:{
        type:String,
        trim:true,
        required:true
    },
    status:{
        type:String,
        trim:true,
        required:true
    },
    profile:{
        type:String,
        trim:true,
        required:true
    },
    location:{
        type:String,
        trim:true,
        required:true
    }

})
const employees=new mongoose.model('employees',employeeScema)
module.exports=employees