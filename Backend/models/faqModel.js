import mongoose from 'mongoose';


const faqSchema = new mongoose.Schema({
    question:{
        type: String,
    },
    answer:{
        type:String,
    }
})

const faqModel = mongoose.model( "faq", faqSchema)

export default faqModel;