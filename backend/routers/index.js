const express = require('express')
const router = express.Router()
const quesRouter = require('./Question')
const ansRouter = require('./Answer')

router.get('/', (req,res) => {
    res.send('Welcome to home page');
})

router.use('/ques', quesRouter);
router.use('/ans', ansRouter);

module.exports = router;