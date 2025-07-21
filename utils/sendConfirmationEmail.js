import emailjs from "emailjs-com";

export const sendConfirmationEmail = async (userEmail, donationAmount) => {
  const serviceID = "service_2o5q5p9";
  const templateID = "template_sj40agl";
  const userID = "9jfKsifhXUcbK9RZH";

  const emailParams = {
    to_email: userEmail,
    company_email: "info@raisingconsciousness.co.za",
    donation_amount: donationAmount,
    message: `Thank you for your generous donation of ${donationAmount} ZAR!`,
  };

  try {
    console.log(`Sending confirmation email to: ${userEmail}`);
    await emailjs.send(serviceID, templateID, emailParams, userID);
    console.log("Confirmation email sent successfully!");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};
