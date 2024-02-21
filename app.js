dotenv.config();

// Configure Nodemailer for sending through Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using Gmail service
  port: 587, // Standard SMTP port for Gmail
  secure: false, // Use TLS instead of STARTTLS
  auth: {
    user: 'kasseno4ka@gmail.com', 
    pass: process.env.GMAIL_APP_PASSWORD, 
  },
});

// Function to send HTML emails using Handlebars templates
function sendEmail(recipient, subject, templateData) {
  // Load and compile the template from file
  const template = handlebars.compile(fs.readFileSync('templates/welcome.hbs', 'utf-8'));

  // Replace template placeholders with data
  const html = template(templateData);

  // Set up email options
  const mailOptions = {
    from: 'kasseno4ka@gmail.com', 
    to: recipient,
    subject: subject, 
    html: html, 
  };

  // Send email with error handling
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

// Prepare data for the template
const recipient = 'your_email@example.com'; 
const subject = 'Welcome!'; 
const templateData = {
  greeting: 'Hello', 
  name: 'Ilyas Kassen',
  message: 'Thank you for signing up!', 
};

// Send email with prepared data
sendEmail(recipient, subject, templateData);
