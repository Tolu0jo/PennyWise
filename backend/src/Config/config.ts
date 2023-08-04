import dotenv from "dotenv"
dotenv.config()

export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
export const DATABASE_HOST = process.env.DATABASE_HOST as string;
export const DATABASE_NAME = process.env.DATABASE_NAME as string;
export const DATABASE_PORT = process.env.DATABASE_PORT as unknown as number;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME as string;
export const jwtSecret = process.env.JWT_SECRET as string;
export const salt = Number(process.env.SALT);

export const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
export const apiKey = process.env.CLOUDINARY_API_KEY;
export const apiSecret = process.env.CLOUDINARY_API_SECRET;



export const BREVO_USER = process.env.BREVO_USER as string
export const BREVO_PASSWORD = process.env.BREVO_PASSWORD as string
export const BREVO_HOST = process.env.BREVO_HOST as string
export const BREVO_PORT = Number(process.env.BREVO_PORT)
export const FROM_ADMIN_MAIL = process.env.FROM_ADMIN_MAIL as string
export const MAIL_SUBJECT = process.env.MAIL_SUBJECT as string