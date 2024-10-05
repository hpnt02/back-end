const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const LoaiDiemSchema= new Schema({ 
    MaLoaiDiem:{type:String, maxlength:15, require:true},
    TenLoaiDiem:{type:String, maxlength:100}, 
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'LoaiDiem'
},
    {timestamps:true }
)


module.exports = mongoose.model('LoaiDiem', LoaiDiemSchema)