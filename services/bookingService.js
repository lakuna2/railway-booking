const {} = require('../config/prisma')

async function getAllBooking() {
    try {
        const booking = await prisma.booking.findMany();

        return booking;
    } catch (error) {
        // console.eror(error);

        // throw new Error()
    }

};



module.exports = {
    getAllBooking
};