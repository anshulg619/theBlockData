import mongoose from "mongoose";


const qouteSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true }, 
  companyName: { type: String, required: true },
  attachedFile: { type: String, require:true },
  checkboxes: [{ type: String, required: false }],
  projectDetails: { type: String },
  referenceWebsite: { type: String }
}, {
  timestamps: true
})

const qouteModel = mongoose.model( "qoute", qouteSchema)

export default qouteModel;