import { Request, Response } from "express";
import Account, { AccountAttributes } from "../Models/accountModel";
import { uploadFile } from "../middleware/cloudinary";
import { v4 as uuidv4 } from "uuid";
import { createAccountSchema, options } from "../Utils/utils";
import jwt, { Secret } from "jsonwebtoken";
import { generateOtp, sendVerificationOTP } from "../Config/OtpConfig";
import axios from "axios";
import User from '../Models/userModel';


const jwtsecret = process.env.JWT_SECRET as string;

interface JwtPayload {
  userId: string;
}

// Assuming you have the API base URL stored in a constant
const API_BASE_URL = 'https://open-banking.onrender.com';

export const CreateAccount = async (req: Request | any, res: Response) => {
try {
     const userId = req.user.id
    const { bankName, accountNumber, accountName, bvn} =
      req.body;

   const id = uuidv4();

    const newAccount: AccountAttributes = await Account.create({
      id,
      bankName,
      accountNumber,
      accountName,
      bvn,
      identification : "ereeee.com",
      userId
    });


    return res.status(201).json({ newAccount, message:"Account Linked Sucessfully" });


} catch (error) {
  console.log(error)

  return res.status(500).json({ error: "Internal server error" });
}



}
  // try {

 

  //   const token = req.headers.authorization?.split(' ')[1];

    // if (!token) {
    //   return res.status(401).json({ Error: 'Unauthorized' });
    // }

  //   // let userId: string;

  //   // try {
  //   //   const decodedToken = jwt.verify(token, jwtsecret) as { id: string };
  //   //   userId = decodedToken.id;
  //   // } catch (error) {
  //   //   return res.status(401).json({ Error: 'Invalid token' });
  //   // }

  //   // if (!userId) {
  //   //   return res.status(401).json({ Error: 'Invalid user' });
  //   // }

 

  //   // const validateResult = createAccountSchema.validate(req.body, options);

  //   // if (validateResult.error) {
  //   //   return res
  //   //     .status(400)
  //   //     .json({ Error: validateResult.error.details[0].message });
  //   // }

  //   // Upload the identification file to Cloudinary
  // //   const uploadResult = await uploadFile(identification, id, "file");
  // // console.log(uploadResult)
  //   const user = await User.findByPk(userId);

  //       if (!user) {
  //         return res.status(404).json({ Error: 'User not found' });
  //       }

  //   // Generate OTP
  //   // const otp = generateOtp();

  //   // // Update the user with the OTP and its expiry time
  //   // user.otp = otp.otp;
  //   // user.otp_expiry = otp.otp_expiry;
  //   // await user.save();

  //   // // Send OTP to the user's email
  //   // await sendVerificationOTP(user.email, otp.otp);


  //       // Generate a new token containing the user ID
  //       const newToken = jwt.sign({ userId: user.id }, jwtsecret);

  //       return res.status(201).json({ newAccount, token: newToken });
  //     } else {
  //       return res.status(400).json({ Error: 'Account does not exist' });
  //     }
 

  //   }



export const VerifyOTP = async (req: Request, res: Response) => {
  try {
    const { otp } = req.body;

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ Error: "Unauthorized" });
    }

    const verified = jwt.verify(token, jwtsecret as Secret) as JwtPayload;

    if (!verified || !verified.userId) {
      return res.status(401).json({ Error: "Token not valid" });
    }

    const userId = verified.userId;

    // Find the user by ID
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ Error: "User not found" });
    }

    console.log("Received OTP:", otp);
    console.log("User OTP:", user.otp);
    console.log("OTP Expiry:", user.otp_expiry);

    // Check if the OTP matches and is not expired
    if (
      user.otp !== otp ||
      !user.otp_expiry ||
      new Date(user.otp_expiry) < new Date()
    ) {
      return res.status(400).json({ Error: "Invalid OTP" });
    }

    // Update the user as verified
    await User.update(
      { verified: true, otp: 0, otp_expiry: null },
      { where: { id: userId } }
    );

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to verify OTP" });
  }
};

export const getAccountByuserId = async (req: Request | any, res: Response) => {

  const { id } = req.user

  try {
    
    const account = await Account.findAll({where:{userId:id}});

    if (!account) {

      return res.status(404).json({ error: "User not found" });

    }

    return res.status(200).json(account);

  } catch (error) {

    console.error(`Error retrieving account with ID ${id}:`, error);

    return res.status(500).json({ error: "Internal server error" });

  }

};

export const getAccountDetails = async (req: Request | any, res: Response) => {
try {
  
  const { id } = req.user
  console.log(id)
  const account = await Account.findAll({where:{userId:id}});
  const accounts: any = account?.map((acc) => {
    return acc.accountNumber
  });

  console.log(account)
  const apiCall = accounts.map((acc: string) => {
   return axios.get(
      `https://open-banking.onrender.com/transaction/usertransaction/?account_number=${acc}`
    );
  });

  let response:any = []

  await Promise.all(apiCall).then((res:any) => {
   res.map((item:any) => response.push((item.data.Account)))
  });

  return res.status(200).json(response);
} catch (error) {
  console.log(error);
}

}