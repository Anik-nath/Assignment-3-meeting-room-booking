import { Request, Response } from 'express';
import { bookingServices } from '../Booking/booking.service';

const confirmController = async (req: Request, res: Response) => {
  const transactionId = req.query.transactionID as string;
  const updatedBooking =
    await bookingServices.confirmationServices(transactionId);

  if (updatedBooking) {
    // res.send(`<div>
    //   Payment Successful! Your transaction ID: ${transactionId}
    //   </div>`);
    res.redirect('https://nexusmeet.netlify.app/mybookings');
  } else {
    res.status(404).send(`<div>Transaction not found!</div>`);
  }
};
export const paymentController = { confirmController };
