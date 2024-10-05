const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const DiemSchema= new Schema({ 
   
    HocSinh:{
        type:String,
        ref:'HocSinh'
    },
    MonHoc:{
        type:String,
        ref:'MonHoc'
    },
    Diem:{type: Number},
    LoaiDiem:{
        type:String,
        ref:'LoaiDiem'
    },
    NamHoc:{
        type:String,
        ref:'NamHoc'
    },
    HocKy:{
        type:String,
        ref:'HocKy'
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'Diem'
},
    {timestamps:true }
)


module.exports = mongoose.model('Diem', DiemSchema)