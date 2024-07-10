import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({

    position: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      mobile: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      basicInfo: {
        type: String,
        required: true
      },
      resume: {
        type: String,
        required: true
      },
})

const candidateModel = mongoose.model("candidate",candidateSchema)

export default candidateModel;