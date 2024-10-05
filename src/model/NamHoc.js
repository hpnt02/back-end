const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;



const NamHocSchema= new Schema({ 
    TenNamHoc:{ type:String,},  
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
},
{
    collection:'NamHoc'
},
    {
        timestamps:true
       
    }
)



module.exports = mongoose.model('NamHoc', NamHocSchema)