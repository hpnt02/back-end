const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const VienChucSchema= new Schema({ 
    MaVC:{type:String, maxlength:15, require:true},
    HoVC:{type:String, maxlength:100}, 
    TenVC:{type:String, maxlength:50},
    GioiTinh:{type:Boolean},
    NgaySinh:{type:Date},
    DiaChi:{type:String, maxlength:150},
    SDT:{type:String, maxlength:10},
    CCCD:{type:String, maxlength:20},
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'VienChuc'
},
    {timestamps:true }
)


module.exports = mongoose.model('VienChuc', VienChucSchema)