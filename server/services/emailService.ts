// Email service using SMTP via nodemailer
import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Get SMTP configuration from environment variables
const smtpConfig = {
  host: process.env.SMTP_SERVER || "smtp.zeptomail.in",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME || "",
    pass: process.env.SMTP_PASSWORD || "",
  },
};

// Create a nodemailer transporter
const transporter = nodemailer.createTransport(smtpConfig);

/**
 * Function to send emails from the contact form using SMTP
 * @param emailData The contact form data
 * @returns Promise with success or error message
 */
export async function sendContactEmail(
  emailData: EmailData,
): Promise<{ success: boolean; message: string }> {
  const { name, email, company, message } = emailData;

  // Validate data
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Missing required fields",
    };
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Invalid email format",
    };
  }

  try {
    // Prepare the email message
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
    `;

    // Hard code the recipient to make sure it works
    const TO_EMAIL = "info@kubeace.com";

    // Set up email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || "noreply@kubeace.com",
      to: TO_EMAIL, // Explicit recipient email
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: emailContent,
      text: `
        New Contact Form Submission
        ---------------------------
        Name: ${name}
        Email: ${email}
        ${company ? `Company: ${company}\n` : ""}
        Message: ${message}
      `,
    };

    // Log that we're sending an email with complete information
    console.log("Sending email via SMTP with options:", JSON.stringify({
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      replyTo: mailOptions.replyTo
    }));

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId, "To:", mailOptions.to);

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error sending email",
    };
  }
}

/**
 * Helper function to validate email format
 * @param email The email to validate
 * @returns True if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
