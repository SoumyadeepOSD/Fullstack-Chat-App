import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async(req, res) => {
    try {
        const {message} = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });

        if(!conversation){
            conversation = await Conversation({
                participants: [senderId, receiverId]
            });  
        }


        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // &Socket.IO functionality will be added here

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            // io.to(<socket_id>).emit() is used to send events to specific
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in message controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}


export const getMessage = async(req, res) => {
    try {
        const senderId = req.user._id;
        const receiverId = req.params.id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        }).populate("messages");

        if (!conversation) {
            //& If there's no conversation, return an empty array or appropriate message
            return res.status(200).json([]);
        }

        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in message controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
