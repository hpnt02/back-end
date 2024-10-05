const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const MonHocSchema= new Schema({ 
    MaMonHoc:{type:String, maxlength:15},
    TenMonHoc:{type:String, maxlength:100}, 
    SoTC:{type:Number},
    LyThuyet:{type:Number},
    ThucHanh:{type:Number},
    Thi:{type:Number},
    Nganh:{
        type:String,
        ref:'Nganh'
    },
  
    LoaiMonHoc:{type:Boolean},
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'MonHoc'
},
    {timestamps:true }
)


module.exports = mongoose.model('MonHoc', MonHocSchema)