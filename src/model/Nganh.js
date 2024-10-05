const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const NganhSchema= new Schema({ 
    MaNganh:{type:String, maxlength:15, require:true},
    TenNganh:{type:String, maxlength:100}, 
    Khoa:{
        type:String, 
        ref:'Khoa'
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'Nganh'
},
    {timestamps:true }
)


module.exports = mongoose.model('Nganh', NganhSchema)