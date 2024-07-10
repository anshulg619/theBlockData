import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required : true
    },
    message:{
        type:String,
        required: true
    }
})

const messageModel = mongoose.model( "messages", messageSchema)

export default messageModel;