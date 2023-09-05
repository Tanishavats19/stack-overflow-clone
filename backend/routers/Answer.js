const express = require('express')
const router = express.Router()

const ansDB = require('../models/Answer');

router.post("/", async (req, res) => {
    const ansData = new ansDB({
      ques_id: req.body.ques_id,
      ans: req.body.ans,
      user: req.body.user,
    });
    await ansData
    .save()
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(400).send({
        message: "Answer not added successfully",
      });
    });
});

module.exports = router;