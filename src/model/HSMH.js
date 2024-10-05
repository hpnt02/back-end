const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const HSMHchema= new Schema({ 
   
    HocSinh:{
        type:String,
        ref:'HocSinh',
        unique: true
    },
   MonHoc:{
        type:String,
        ref:'MonHoc'
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
    collection:'HSMH'
},
    {timestamps:true }
)


module.exports = mongoose.model('HSMH', HSMHchema)