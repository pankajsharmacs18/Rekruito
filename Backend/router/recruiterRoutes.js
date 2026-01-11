const express = require('express');
const router = express.Router();
const recruiterController = require('../controller/recruiterController');
const authMiddleware = require('../middleware/authMiddleware');
const { restrictTo } = require('../middleware/roleMiddleware');

router.post(
  '/create-profile',
  authMiddleware.protect,
  restrictTo('user'),
  recruiterController.createRecruiterProfile
);

module.exports = router;
