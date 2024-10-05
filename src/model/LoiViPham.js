const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const LoiViPhamSchema= new Schema({ 

    HocSinh:{
        type:String,
        ref:'HocSinh'
    },  
    MonHoc:{
        type:String,
        ref:'MonHoc'
    },
    GiaoVien:{
        type:String,
        ref:'GiaoVien'
    },
    TenLoi:{type:String},
    NgayViPham:{type:Date},
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
    collection:'LoiViPham'
},
    {timestamps:true }
)


module.exports = mongoose.model('LoiViPham', LoiViPhamSchema)

