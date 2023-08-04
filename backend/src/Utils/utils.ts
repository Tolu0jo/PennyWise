import Joi from "joi";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { BREVO_HOST, BREVO_PASSWORD, BREVO_PORT, BREVO_USER } from "../Config/config";

export const createAccountSchema = Joi.object().keys({
  bankName: Joi.string().required(),
  accountNumber: Joi.number().max(9999999999).required(),
  accountName: Joi.string().required(),
  bvn: Joi.number().max(99999999999).required(),
  identification: Joi.string().required(),
});

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

dotenv.config();

export const generateOtp = () => {
  const otp = Math.floor(10 + Math.random() * 900000);
  const otp_expiry = new Date();

  otp_expiry.setTime(new Date().getTime() + 10 * 60 * 1000);

  return { otp, otp_expiry };
};

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    const transporter = nodemailer.createTransport({
        host:BREVO_HOST,
        port:BREVO_PORT,
        auth: {
            user: BREVO_USER,
            pass: BREVO_PASSWORD
        },
      tls: {
        rejectUnauthorized: false,
      },
      
    });

    const mailOptions = {
      from: "Pennywise",
      to: email,
      subject: "Account Verification",
      html: `
        
      <a href=http://localhost:5173/verify/?token=${token} style="
      width:124px;
      height:46px;
      background:rgba(45,0,247,1);
      color:white;
      border-radius:100px;
      border:0px;
      outline:none;
      text-decoration:none;display:flex;
      align-items:center;
      justify-content:center
      
      ">Clink to verify Link<a>
      <p>Please enter this link to verify your password.</p>
      <p>Note that this link is valid for 10 minutes.</p>
      <p>If you did not make this request, kindly ignore this email.</p>
    `,
    };

   return  await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};

export const sendResetPasswordLink = async (email: string, token: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "chiorlujack@gmail.com",
        pass: "hrxlnkvafltyihvo",
      },
    });

    const mailOptions = {
      from: "Pennywise",
      to: email,
      subject: " Password Reset link",
      html: `
        
        <a href=http://localhost:5173/reset-password/?token=${token} style="
        width:124px;
        height:46px;
        background:rgba(45,0,247,1);
        color:white;
        border-radius:100px;
        border:0px;
        outline:none;
        text-decoration:none;display:flex;
        align-items:center;
        justify-content:center
        
        ">Clink to verify Link<a>
        <p>Please enter this link to reset your password.</p>
        <p>Note that this link is valid for 10 minutes.</p>
        <p>If you did not make this request, kindly ignore this email.</p>
      `,
    };

  return  await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};

export const generatePasswordReseToken = async (email: string) => {
  const payload = {
    email: email,
  };

  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "10min",
    });

    return token;
  } catch (error) {
    console.error(error);
  }
};

export const validatePasswordResetToken = (token: string) => {
  try {
    const verified: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    return verified;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const generateAccountToken = async (email: string) => {
    const payload = {
      email: email,
    };
  
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: "10min",
      });
  
      return token;
    } catch (error) {
      console.error(error);
    }
  };
  export const validateAccountToken = (token: string) => {
    try {
      const verified: any = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      );
  
      return verified;
    } catch (error) {
      console.error(error);
      return false;
    }
  };