import faqModel from "../models/faqModel.js";

class FaqController{

    static getAllQuestions = async (req,res)=>{
        try {
            const fetchAllQuestions = await faqModel.find();
            return res.status(200).json(fetchAllQuestions);
        } catch (error) {
            res.status(400).json({message : error.message});
        }
    }
}


export default FaqController;