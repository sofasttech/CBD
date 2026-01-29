const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure Nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/api/contact', (req, res) => {
    const { name, email, phone, vehicleReg, service, message } = req.body;

    // Determine recipient based on service type
    let recipientEmail = 'info@cbdpanel.co.nz';
    const bccEmail = 'chandana@cbdpanel.co.nz';

    switch (service) {
        case 'Panel Beating':
            recipientEmail = 'info@cbdpanel.co.nz';
            break;
        case 'Mechanical':
            recipientEmail = 'info@glsm.co.nz';
            break;
        case 'Caravan and Boat':
            recipientEmail = 'info@thetrailerandcaravanrepairshop.co.nz';
            break;
        default:
            recipientEmail = 'info@cbdpanel.co.nz';
    }

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address (must be authenticated user)
        replyTo: email, // Valid email address of the person filling the form
        to: recipientEmail, // Recipient address
        bcc: bccEmail,
        subject: `New Contact from Website: ${service}`,
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Vehicle Registration: ${vehicleReg}
      Service Type: ${service}
      
      Message:
      ${message}
    `,
        html: `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Vehicle Registration:</strong> ${vehicleReg}</p>
      <p><strong>Service Type:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
