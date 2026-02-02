import nodemailer from 'nodemailer';
import multer from 'multer';

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Helper method to wait for a middleware to execute before continuing
// and to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

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

    // Run multer middleware to parse request body and files
    try {
        await runMiddleware(req, res, upload.array('images', 5));
    } catch (error) {
        console.error('Error parsing form data:', error);
        return res.status(500).json({ error: 'Error processing upload' });
    }

    const { name, email, phone, vehicleReg, service, message } = req.body;
    const files = req.files || [];

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
    let recipientEmail = 'pramudithapaypal@gmail.com';
    const bccEmail = '';

    switch (service) {
        case 'Panel Beating':
            recipientEmail = 'pramudithapaypal@gmail.com';
            break;
        case 'Mechanical':
            recipientEmail = 'pramudithapaypal@gmail.com';
            break;
        case 'Caravan and Boat':
            recipientEmail = 'pramudithapaypal@gmail.com';
            break;
        default:
            recipientEmail = 'pramudithapaypal@gmail.com';
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
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Request</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            line-height: 1.6;
          }
          
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          
          .email-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
          }
          
          .email-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.05)"/></svg>');
            opacity: 0.1;
          }
          
          .header-title {
            color: #ffffff;
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .header-subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            margin-top: 8px;
            position: relative;
            z-index: 1;
          }
          
          .email-body {
            padding: 40px 30px;
          }
          
          .service-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 30px;
          }
          
          .service-panel-beating {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: #ffffff;
          }
          
          .service-mechanical {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: #ffffff;
          }
          
          .service-caravan {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            color: #ffffff;
          }
          
          .service-default {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            color: #ffffff;
          }
          
          .info-card {
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            transition: transform 0.2s ease;
          }
          
          .info-card:hover {
            transform: translateX(5px);
          }
          
          .info-label {
            color: #667eea;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }
          
          .info-value {
            color: #2d3748;
            font-size: 16px;
            font-weight: 500;
          }
          
          .message-card {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
            padding: 25px;
            margin-top: 25px;
            border: 1px solid #dee2e6;
          }
          
          .message-label {
            color: #667eea;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
          }
          
          .message-label::before {
            content: '💬';
            margin-right: 8px;
            font-size: 18px;
          }
          
          .message-content {
            color: #2d3748;
            font-size: 15px;
            line-height: 1.7;
            white-space: pre-wrap;
          }
          
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
          }
          
          @media (max-width: 600px) {
            .contact-grid {
              grid-template-columns: 1fr;
            }
          }
          
          .email-footer {
            background: #2d3748;
            padding: 25px 30px;
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            font-size: 13px;
          }
          
          .footer-text {
            margin: 0;
            line-height: 1.5;
          }
          
          .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #dee2e6, transparent);
            margin: 25px 0;
          }
          
          .attachment-notice {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px 20px;
            border-radius: 8px;
            margin-top: 20px;
            display: flex;
            align-items: center;
          }
          
          .attachment-notice::before {
            content: '📎';
            margin-right: 10px;
            font-size: 20px;
          }
          
          .attachment-text {
            color: #856404;
            font-size: 14px;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <!-- Header -->
          <div class="email-header">
            <h1 class="header-title">New Contact Request</h1>
            <p class="header-subtitle">A new inquiry has been received from your website</p>
          </div>
          
          <!-- Body -->
          <div class="email-body">
            <!-- Service Badge -->
            <div style="text-align: center;">
              <span class="service-badge ${service === 'Panel Beating' ? 'service-panel-beating' :
                service === 'Mechanical' ? 'service-mechanical' :
                    service === 'Caravan and Boat' ? 'service-caravan' :
                        'service-default'
            }">
                ${service}
              </span>
            </div>
            
            <!-- Contact Information Grid -->
            <div class="contact-grid">
              <div class="info-card">
                <div class="info-label">👤 Customer Name</div>
                <div class="info-value">${name}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">📧 Email Address</div>
                <div class="info-value">${email}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">📞 Phone Number</div>
                <div class="info-value">${phone}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">🚗 Vehicle Registration</div>
                <div class="info-value">${vehicleReg || 'Not provided'}</div>
              </div>
            </div>
            
            <!-- Divider -->
            <div class="divider"></div>
            
            <!-- Message Section -->
            <div class="message-card">
              <div class="message-label">Customer Message</div>
              <div class="message-content">${message}</div>
            </div>
            
            ${files.length > 0 ? `
            <!-- Attachment Notice -->
            <div class="attachment-notice">
              <span class="attachment-text">
                This email contains ${files.length} attachment${files.length > 1 ? 's' : ''}
              </span>
            </div>
            ` : ''}
          </div>
          
          <!-- Footer -->
          <div class="email-footer">
            <p class="footer-text">
              This is an automated message from your website contact form.<br>
              Please respond to the customer at their email address: <strong>${email}</strong>
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
        attachments: files.map(file => ({
            filename: file.originalname,
            content: file.buffer
        }))
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
}
