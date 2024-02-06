import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    // &senderId will be taken from "User" model
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    // &receiverId will be taken from "User" model
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    }    
},{timestamps: true});

const Message = mongoose.model("Message", messageSchema);
export default Message;