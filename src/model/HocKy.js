const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;



const HocKySchema= new Schema({ 
   
    MaHocKy:{
        type:String,
        
    },
    TenHocKy:{
        type:String,
       
    },
    createAt: {type : Date , default: Date.now},
    updateAt: {type : Date , default: Date.now}
    
},
{
    collection:'HocKy'
},
    {timestamps:true }
)



module.exports = mongoose.model('HocKy', HocKySchema)