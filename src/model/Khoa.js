const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const KhoaSchema= new Schema({ 
    MaKhoa:{type:String, maxlength:15, require:true},
    TenKhoa:{type:String, maxlength:100}, 
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'Khoa'
},
    {timestamps:true }
)


module.exports = mongoose.model('Khoa', KhoaSchema)