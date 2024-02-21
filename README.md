 **# Nodemailer Email Sender with Handlebars Templates**

**Description:**

This Node.js application demonstrates sending personalized HTML emails using Nodemailer and Handlebars templates. It's configured to send emails through Gmail with basic error handling.

**Features:**

- **Nodemailer:** Handles email sending using Gmail's SMTP server.
- **Handlebars:** Enables dynamic email content with templating.
- **dotenv:** Securely stores Gmail credentials in environment variables.
- **Error handling:** Logs errors during email sending.
- **HTML email support:** Sends emails in HTML format for rich content.

**Setup:**

1. Install dependencies:
   ```bash
   npm install nodemailer dotenv handlebars
   ```
2. Create a `.env` file in the project root and add the following:
   ```
   GMAIL_APP_PASSWORD=your_gmail_app_password
   ```
   (Replace `your_gmail_app_password` with your actual Gmail app password.)

**Usage:**

1. Customize the `sendEmail` function's parameters as needed.
2. Call the `sendEmail` function with the recipient's email, subject, and template data.

**Example:**

```javascript
sendEmail('recipient@example.com', 'Welcome!', {
  greeting: 'Hello',
  name: 'John Doe',
  message: 'Thank you for joining!'
});
```

**Additional Information:**

- The code uses the `templates/welcome.hbs` file for the email template.
- Consider exploring Nodemailer's advanced features for attachments, secure connections, and different transport options.
