const Recruiter = require("../models/recruiter");

exports.createRecruiterProfile = async (req, res) => {
  try {
    const existingProfile = await Recruiter.findOne({ user: req.user.id });

    if (existingProfile) {
      return res.status(400).json({
        status: "error",
        message: "Recruiter profile already exists",
      });
    }

    const recruiter = await Recruiter.create({
      user: req.user.id,
      companyName: req.body.companyName,
      companyWebsite: req.body.companyWebsite,
      companySize: req.body.companySize,
      industry: req.body.industry,
      location: req.body.location,
    });

    res.status(201).json({
      status: "success",
      data: {
        recruiter,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
