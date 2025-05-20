import axios from 'axios';

interface EmailData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Configure API settings
const API_URL = 'https://api.zeptomail.in/v1.1/email';
const token = process.env.ZEPTO_API_TOKEN || "Zoho-enczapikey PHtE6r0MFL/tj2Yo9xcBtPW+QJWiMt4s+O1kJQkTttpBW/cAG01S/9ovkWe3qh97U/JDQPOZwI88temV5uqHLGzqYWhMVWqyqK3sx/VYSPOZsbq6x00Vs14bcETbU4bse9Nv0SLVutzcNA==";

export async function sendContactEmail(
  emailData: EmailData
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
    // Prepare the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
    `;

    const TO_EMAIL = "info@kubeace.com";

    // Set up email payload matching the curl format
    const payload = {
      from: {
        address: "noreply@kubeace.com"
      },
      to: [{
        email_address: {
          address: TO_EMAIL,
          name: "KubeAce"
        }
      }],
      subject: `New Contact Request from ${name}`,
      htmlbody: emailContent
    };

    // Make the API request using axios
    const response = await axios.post(API_URL, payload, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });

    console.log("Email sent successfully:", response.data);

    return {
      success: true,
      message: "Email sent successfully"
    };
  } catch (error) {
    console.error("Error sending email:", error?.response?.data || error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error sending email"
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
