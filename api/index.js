


import express from 'express';
import cors from 'cors';
import twilio from 'twilio';
import dotenv from 'dotenv'
const app = express();
const dot=dotenv.config();
const accountSid = dot.parsed.accountSid;
const authToken = dot.parsed.authToken;
app.use(express.json());
const client = twilio(accountSid, authToken);

app.use(cors());

app.post('/message', async (req, res) => {
  
  const indianPhoneNumberPattern = /^[6789]\d{9}$/;
  // Check if the provided phone number matches the Indian phone number pattern
  if (!indianPhoneNumberPattern.test(req.body.to)) {
    return res.status(400).json({ success: false, msg: 'Invalid Indian phone number' });
  }
  try {
    await client.messages.create({
      body: req.body.message,
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+91'+req.body.to,
    });
    return res.json({ success: true, msg: 'Message sent successfully' });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
});

app.post('/text', async (req, res) => {
  
  const indianPhoneNumberPattern = /^[6789]\d{9}$/;
  // Check if the provided phone number matches the Indian phone number pattern
  if (!indianPhoneNumberPattern.test(req.body.to)) {
    return res.status(400).json({ success: false, msg: 'Invalid Indian phone number' });
  }
  try {
    await client.messages.create({
      body: req.body.message,
      from: '+18575984355',
      to: '+91'+req.body.to
    });
    return res.json({ success: true, msg: 'Message sent successfully' });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
});
app.post('/call', async(req, res) => {
  
  const msg=await req.body.message;
  const indianPhoneNumberPattern = /^[6789]\d{9}$/;
  // Check if the provided phone number matches the Indian phone number pattern
  if (!indianPhoneNumberPattern.test(req.body.to)) {
    return res.status(400).json({ success: false, msg: 'Invalid Indian phone number' });
  }
  try {
    console.log('hitting');
    res.type('xml');
     res.send(`
      <Response>
     
      <Say>esting from frontend work this time</Say>
   
      </Response>
    `);

    client.calls
      .create({
        url: 'https://b89a-2401-4900-1f3d-fd5f-acc1-7939-ef9b-c102.ngrok-free.app/call',
        to: '+91' + req.body.to,
        from: '+18575984355'
      })
      .then(call => console.log(call.sid))
      .catch(error => {
        console.error('Twilio call error:', error);
        // Handle the error here (e.g., send an error response to the client)
      });
  } catch (error) {
    console.error('Route error:', error);
    // Handle the error here (e.g., send an error response to the client)
  }
});



const port=dot.parsed.PORT;
app.listen("9000",(req,res)=>{
    console.log(`server is running on port ${port}`);
    
})