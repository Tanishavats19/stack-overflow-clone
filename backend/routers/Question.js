const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const quesDB = require('../models/Question');

//asking a new question
router.post('/', async (req, res) => {
    const quesData = new quesDB({
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tag,
        user: req.body.user,
      });
    
      await quesData
        .save()
        .then((doc) => {
          res.status(201).send(doc);
        })
        .catch((err) => {
          res.status(400).send({
            message: "Question not added successfully",
          });
        });
})

//fetching previous questions
router.get("/", async (req, res) => {
    const error = {
      message: "Error in retrieving questions",
      error: "Bad request",
    };
  
    quesDB.aggregate([
      {
        $lookup: {
          from: "answers",
          let: { ques_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$ques_id", "$$ques_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
              },
            },
          ],
          as: "ansDetails",
        },
      },
      {
        $project: {
          __v: 0,
        },
      },
    ])
      .exec()
      .then((quesDetails) => {
        res.status(200).send(quesDetails);
      })
      .catch((e) => {
        console.log("Error: ", e);
        res.status(400).send(e);
      });
  });


//fetching a particular question
router.get("/:id", async (req, res) => {
    try {
        const error = {
            message: "Error in retrieving questions",
            error: "Bad request",
          };
        
          quesDB.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(req.params.id)
                }
            },
            {
              $lookup: {
                from: "answers",
                let: { ques_id: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$ques_id", "$$ques_id"],
                      },
                    },
                  },
                  {
                    $project: {
                      _id: 1,
                      user:1,
                      ans:1,
                      ques_id:1,
                      created_At:1,
                    },
                  },
                ],
                as: "ansDetails",
              },
            },
            {
              $project: {
                __v: 0,
              },
            },
          ])
            .exec()
            .then((quesDetails) => {
              res.status(200).send(quesDetails);
            })
            .catch((e) => {
              console.log("Error: ", e);
              res.status(400).send(e);
            });
    } catch (e) {
        console.log(e)
        res.status(400).send({
            message:"Question not found",
        });
    }
    
  });
  


module.exports = router;