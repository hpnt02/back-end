const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const LopHocSchema= new Schema({ 
    MaLopHoc:{type:String, maxlength:15},
    TenLopHoc:{type:String, maxlength:100}, 
    Nganh:{
        type:String,
        ref:'Nganh'
    },
    GiaoVien:{
        type:String,
        ref:'GiaoVien'
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}

},
{
    collection:'LopHoc'
},
    {timestamps:true }
)


module.exports = mongoose.model('LopHoc', LopHocSchema)