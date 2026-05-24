import interviewReportModel from "../models/interviewReport.model.js";

export const createInterviewController = async (
  req,
  res
) => {

  const {
    jobDescription,
    resume,
    selfDescription
  } = req.body;



  const report = await interviewReportModel.create({

    jobDescription,
    resume,
    selfDescription,

    title: "Frontend Developer",

    user: req.user.id

  });



  res.status(201).json({
    success: true,
    report
  });

};