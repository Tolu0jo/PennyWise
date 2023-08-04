import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otp_expiry = new Date();
  
    otp_expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
  
    return { otp, otp_expiry };
  };
  
export const sendVerificationOTP = async (email: string, otp: number) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.smtp_host,
      port: 465,
      secure: true,
      auth: {
        user: process.env.sendinblue_user,
        pass: process.env.sendinblue_pass,
      },
    });

    const mailOptions = {
      from: "PennyWise <noreply@pennywise-mails.com>",
      to: email,
      subject: "Verify Account",
      html: `
      <div style="background-color: #ccc; padding: 20px; font-family: Arial, sans-serif;">
      <div style="background-color: #ccc; max-width: 500px; margin: 0 auto; border-radius: 4px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="padding: 20px;">
          <h2 style="text-align: center; color: #333333;">Verify Your Account</h2>
          <p style="margin-top: 20px; color: #666666;">Your OTP to verify your account is:</p>
          <h1 style="text-align: center; color: #ff9900; font-size: 48px; margin-top: 20px;">${otp}</h1>
          <p style="margin-top: 20px; color: #666666;">Please enter this OTP to verify your account.</p>
          <p style="margin-top: 20px; color: #666666;">Note that the OTP is only valid for 30 minutes.</p>
        </div>
      </div>
    </div>
    
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending account verification OTP");
  }
};
