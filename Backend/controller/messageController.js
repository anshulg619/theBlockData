import messageModel from "../models/messageModel.js";

class MessageController {
  static addNewMessage = async (req, res) => {
    const { name, number, email, message } = req.body;
    try {
      if (name && number && email && message) {
        const newMessage = new messageModel({
          name: name,
          number: number,
          email: email,
          message: message,
        });

        const saveMessage = await newMessage.save({ newMessage });
        if (saveMessage) {
          return res.status(200).json({ message: "message sent successfully" });
        }
      } else {
        res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}


export default MessageController;