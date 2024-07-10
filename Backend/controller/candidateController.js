import candidateModel from "../models/candidateModel.js";

class CandidateController{

    static saveCandidate = async (req, res) => {
        const { position,name,email,mobile, basicInfo } = req.body;
        try {
          if (name && number && email && message) {
            const newCandidate = new candidateModel({
              position:position,
              name: name,
              email: email,
              mobile: mobile,
              basicInfo: basicInfo,
              resume: req.file.filename
            });
    
            const saveCandidate = await newCandidate.save({ newCandidate });
            if (saveCandidate) {
              return res.status(200).json({ message: "applied successfully" });
            }
          } else {
            res.status(400).json({ message: "All fields are required" });
          }
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      };
}

export default CandidateController;