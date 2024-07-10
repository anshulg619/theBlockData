import express from "express";
import FaqController from "../controller/faqController.js";
import MessageController from "../controller/messageController.js"
import QouteController from "../controller/qouteController.js";
import JobController from "../controller/jobController.js";
import CandidateController from "../controller/candidateController.js";
import multer from 'multer';

const route = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/userFiles')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })

  const upload = multer({storage: storage})
//route to get all faqs
route.get("/faq", FaqController.getAllQuestions)

//route for getting job posts
route.get("/Career", JobController.getAllJobs)

//route to save  message in database 
route.post("/message", MessageController.addNewMessage)

//route to save qoutes in database
route.post("/qoute", upload.single('attachedFile'),QouteController.addNewQoute)

//route to save the application
route.post("/candidate",upload.single('resume'),CandidateController.saveCandidate)

export default route;