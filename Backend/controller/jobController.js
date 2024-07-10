import jobModel from "../models/jobModel.js";

class JobController{
    static getAllJobs = async (req,res)=>{
        try {
            const fetchAllJobs = await jobModel.find();
            return res.status(200).json(fetchAllJobs);
        } catch (error) {
            res.status(400).json({message : error.message});
        }
    }
}

export default JobController;