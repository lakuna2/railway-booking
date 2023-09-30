const express = require('express');
// const userController = require('../controllers/userController');
const router = express.Router();

// get all booking
router.get('/booking', (req, res) => {
    console.log('masuk ke path /');

    res.json({ name: 'OK'});
})

module.exports = router;