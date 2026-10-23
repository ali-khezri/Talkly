import mongoose from "mongoose";
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

export async function sendMessage(req, res) {
  try {
    const { message } = req.body;

    const { id: receiverId } = req.params;

    const senderId = req.user._id;

    if (!message?.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    if (!mongoose.isValidObjectId(receiverId)) {
      return res.status(400).json({
        error: "Invalid receiver ID",
      });
    }

    if (senderId.toString() === receiverId) {
      return res.status(400).json({
        error: "You cannot send a message to yourself",
      });
    }

    console.log("Database:", User.db.name);

    const receiver = await User.findById(receiverId);

    if (!receiver) {
      return res.status(404).json({
        error: "Receiver not found",
      });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiver._id], $size: 2 },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiver._id],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId: receiver._id,
      message: message.trim(),
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
