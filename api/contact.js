import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this in production if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, vehicleReg, service, message } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).json({ error: 'Server configuration error: Missing email credentials' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

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
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: recipientEmail,
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

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
}
