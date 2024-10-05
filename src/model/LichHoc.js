const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const LichHocSchema= new Schema({ 
   
    LopHoc:{type: String, 
    ref:'LopHoc'},
    GiaoVien:{type: String, 
        ref:'GiaoVien'},
    MonHoc:{type: String, 
            ref:'MonHoc'},
    PhongHoc:{
        type:String
    },
    NhomHP:{
        type:String
    },
    Thu:{
        type:String
    },
   Tiet:{
        type:String
    },
   NgayBD:{
        type:Date
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
    collection:'LichHoc'
},
    {timestamps:true }
)


module.exports = mongoose.model('LichHoc', LichHocSchema)