const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const GiaoVienSchema= new Schema({ 
    MaGV:{type:String, maxlength:15, require:true},
    HoGV:{type:String, maxlength:100}, 
    TenGV:{type:String, maxlength:50},
    GioiTinh:{type:Boolean},
    NgaySinh:{type:Date},
    DiaChi:{type:String, maxlength:150},
    SDT:{type:String, maxlength:10},
    CCCD:{type:String, maxlength:20},
    Khoa:{
        type:String,
        ref:'Khoa'
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'GiaoVien'
},
    {timestamps:true }
)


module.exports = mongoose.model('GiaoVien', GiaoVienSchema)