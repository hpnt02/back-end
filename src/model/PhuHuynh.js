
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const PhuHuynhSchema= new Schema({ 
   HoTenMe:{type:String},
   NgheNghiepMe:{type:String},
   SDTMe:{type:String},
   HoTenCha:{type:String},
   NgheNghiepCha:{type:String},
   SDTCha:{type:String},
   HocSinh:{
    type:String,
    ref:'HocSinh'
},  
createAt: {type : Date , default: Date.now},
updateAt: {type : Date , default: Date.now}
},
{
    collection:'PhuHuynh'
},
    {timestamps:true }
)

module.exports= mongoose.model('PhuHuynh', PhuHuynhSchema)

