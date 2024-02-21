## README.md

# Email Sending Application using Node.js

**Description:**

This application allows you to send plain text emails using Node.js and the Nodemailer library.

**Prerequisites:**

- Node.js installed on your computer
- A code editor (e.g., Visual Studio Code)

**Usage:**

1. **Installation:**

   ```
   npm install
   ```

2. **Running:**

   ```
   node app.js
   ```

3. **Configuration:**

   - Open the `app.js` file.
   - Replace the placeholders in the `transporter` variable with your email credentials.

4. **Example Usage:**

   ```javascript
   const recipient = 'recipient@example.com';
   const subject = 'Test Email from Node.js';
   const message = 'This is a test email sent using Nodemailer.';

   sendEmail(recipient, subject, message);
   ```

**Features:**

- Sending plain text emails
- Error handling
- Command-line support


**Deployment:**

- You can deploy the application to a cloud platform, such as Heroku or AWS, for wider accessibility.

