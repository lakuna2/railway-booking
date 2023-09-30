const {bookingService} = require('../services')
async function getBooking(res,res) {
    const booking = await bookingService.getAllBooking();

    res.status(200).json(booking);
};

module.exports = {
    getBooking
};