import mongoose from 'mongoose';



const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      qualification: {
        type: String,
        required: true
      },
      experience:{
        type: String,
      },
      description: {
        type: String,
        required: true
      },
      keySkills: {
        type: [String], // Array of strings to store multiple skills
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
})

const jobModel = mongoose.model( "jobs", jobSchema)

export default jobModel