const express = require('express');
const {bookingController} = require('../controllers');
const router = express.Router();

// get all booking
router.get('/booking', bookingController.getBooking);

module.exports = {
    router
    };