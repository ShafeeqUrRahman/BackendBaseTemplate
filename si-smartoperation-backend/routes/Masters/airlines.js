const express = require("express");
const Airlines = require("../../models/Masters/airlines_master");
const router = express.Router();


router.post(
  "",
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const airline = new Airlines({
      airlinesName: req.body.title
    });
    post.save().then(airlinesCreated => {
      res.status(201).json({
        message: "Airlines Name added successfully",
        airline: {
          ...airlinesCreated,
          id: airlinesCreated._id
        }
      });
    });
  }
);

module.exports = router;
