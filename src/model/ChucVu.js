const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const ChucVuSchema= new Schema({ 
   MaChucVu :{type:String, require:true, maxlength:20, unique: true}, 
   TenChucVu:{type:String,require:true,minlengh:6,maxlength:255},    
   createAt: {type : Date , default: Date.now},
   updateAt: {type : Date , default: Date.now}
},
    {timestamps:true }
)

module.exports = mongoose.model('ChucVu',ChucVuSchema);