const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const HocSinhSchema= new Schema({ 
    MaHS:{type:String, maxlength:15, require:true},
    HoHS:{type:String, maxlength:100}, 
    TenHS:{type:String, maxlength:50},
    GioiTinh:{type:Boolean},
    NgaySinh:{type:Date},
    DiaChi:{type:String, maxlength:150},
    CCCD:{type:String, maxlength:20},
    LopHoc:{
        type:String,
        ref:'LopHoc'
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'HocSinh'
},
    {timestamps:true }
)


module.exports = mongoose.model('HocSinh', HocSinhSchema)

