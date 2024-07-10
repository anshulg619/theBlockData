import qouteModel from "../models/qoutemodel.js"

class QouteController{
    static addNewQoute = async (req, res) => {
        const { fullName, phoneNumber, email,address, companyName, checkboxes, projectDetails,referenceWebsite } = req.body;
        try {
          if (fullName && phoneNumber && address && email && companyName ) {
            const newQoute = new qouteModel({
              fullName: fullName,
              phoneNumber: phoneNumber,
              email: email,
              address: address,
              companyName:companyName,
              attachedFile:req.file.filename,
              checkboxes:checkboxes,
              projectDetails:projectDetails,
              referenceWebsite:referenceWebsite
            });
    
            const saveQoute = await newQoute.save({ newQoute });
            if (saveQoute) {
              return res.status(200).json({ message: "message sent successfully" });
            }
          } else {
            res.status(400).json({ message: "All fields are required" });
          }
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
    
    }
    
}

export default QouteController;