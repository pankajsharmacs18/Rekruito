const { default: mongoose } = require("mongoose");

const recruiterSchema=new mongoose.Schema({
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
    unique:true
 },
 companyName:{
    type:String,
    required:true
 },
 companyWebsite:String,
 companySize: {
    type: String,
    enum: ['1-10', '11-50', '51-200', '201-500', '500+']
  },
  industry: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;