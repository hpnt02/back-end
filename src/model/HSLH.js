const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const HSLHSchema= new Schema({ 
   
    HocSinh:{
        type:String,
        ref:'HocSinh',
        unique: true
    },
    LichHoc:{
        type:String,
        ref:'LichHoc'
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'HSLH'
},
    {timestamps:true }
)


module.exports = mongoose.model('HSLH', HSLHSchema)