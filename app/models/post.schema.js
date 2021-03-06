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
        
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

})


module.exports = mongoose.model('Post',postSchema)