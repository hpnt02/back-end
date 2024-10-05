const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const DRLSchema= new Schema({ 
    DiemRenLuyen:{type:Number},
    HocSinh:{
        type:String,
        ref:'HocSinh'
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
    collection:'DRL'
},
    {timestamps:true }
)


module.exports = mongoose.model('DRL', DRLSchema)