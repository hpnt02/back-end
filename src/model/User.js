const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    userName:{type:String, maxlength:20}, 
    password:{type:String,minlengh:6,maxlength:255},    
    HocSinh:{
        type:String,
        ref:'HocSinh'
    },
    GiaoVien:{
        type:String,
        ref:'GiaoVien'
    },
    VienChuc:{
        type:String,
        ref:'VienChuc'
    },
    ChucVu:{
        type:String, ref:'ChucVu'
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},{
    collection:'User'
},
    {timestamps:true }
)

module.exports = mongoose.model('User',UserSchema);