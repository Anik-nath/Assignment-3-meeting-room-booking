import axios from 'axios';
import config from '../../config';

 const initiatePayment = async (totalAmount: number, transactionId : string) => {
  const response = await axios.post(config.payment_url as string, {
    type: 'json',
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    tran_id: transactionId,
    success_url: `http://localhost:5000/api/bookings/confirmation?transactionID=${transactionId}`,
    fail_url: 'http://localhost:5173/fail',
    cancel_url: 'http://localhost:5173/cancel',
    amount: totalAmount.toString(),
    currency: 'BDT',
    desc: 'Merchant Registration Payment',
    cus_name: 'Name',
    cus_email: 'payer@merchantcustomer.com',
    cus_add1: 'House B-158 Road 22',
    cus_add2: 'Mohakhali DOHS',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1206',
    cus_country: 'Bangladesh',
    cus_phone: '+8801704',
  });
  // console.log(response.data);
  return response.data;
};
export default initiatePayment;