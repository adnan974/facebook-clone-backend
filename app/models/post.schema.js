const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        //todo
        type:any,
        
    },

})


module.exports = mongoose.model('User',userSchema)