import { jwtSecret, salt } from "../Config/config";
import Express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  options,
  validateRegisteredUser,
  loginUserSchema,
} from "../Utils/joiValidation";
import bcrypt from "bcryptjs";
import User from "../Models/userModel";
import jwt from "jsonwebtoken";
import { generateAccountToken, sendResetPasswordLink, sendVerificationEmail, validatePasswordResetToken } from "../Utils/utils";


//LOGIN ENDPOINT

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const validationResult = loginUserSchema.validate(req.body, options);

    if (validationResult.error)
      return res
        .status(401)
        .json({ Error: validationResult.error.details[0].message });

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(404).json({ Error: "Invalid username or password" });

    const validUser = bcrypt.compare(password, user.password);
    if (!validUser)
      return res.status(404).json({ Error: "Invalid username or password" });

    const token = jwt.sign({ id: user.id }, jwtSecret);

    return res.status(200).json({ message: "Login Succesful", token, user});
  } catch (error) {
    console.log(error)
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

//Register
export const register = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const idGenerator = uuidv4();

    const { firstName, lastName, phone, email, password, confirm_password } =
      req.body;

    const validationResult = validateRegisteredUser.validate(req.body, options);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }

    const passwordhash = await bcrypt.hash(password, salt);

    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
    

      // const token = await generateAccountToken(email) as unknown as string
    
      // await sendVerificationEmail(email, token);


      const newUser = await User.create({
        id: idGenerator,
        ...req.body,
        password: passwordhash,
      });
       
      return res.status(200).json({
        message: "Registration successful",
        newUser,
       
      });
    } else {
      return res.status(301).json({ msg: "User already exist, please login" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ Error: "Internal Server Error" });
  }
};



export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const getUserById = async (req: Request |any, res: Response) => {

    const { id } = req.user;
    
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(`Error retrieving user with ID ${id}:`, error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.destroy();
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const sendEmail = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
  
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(404).json({ Error: "Invalid email" });
      }
  
      const resetToken = (await validatePasswordResetToken(email)) as string;
      await sendResetPasswordLink(email, resetToken);
      return res
        .status(200)
        .json({ Message: "OTP sent successfully", token: resetToken });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
  };
  
  export const resetPassword = async (req: Request, res: Response) => {
    try {
      const { new_password, confirm_password, token } = req.body;
      if (new_password !== confirm_password) {
        return res.status(400).json({ Error: "Password does not match" });
      }
  
      const verified = await validatePasswordResetToken(token);
      if (!verified) {
        return res.status(401).json({ Error: "Invalid credential" });
      }
      const passwordhash = await bcrypt.hash(new_password, salt);
      const { email } = verified;
      const user = await User.update(
        {
          password: passwordhash,
        },
        { where: { email } }
      );
      return res
        .status(200)
        .json({ Message: "Password reset successfully", updated: user });
    } catch (error) {
      return res.status(500).json({ Error: "Internal Server Error" });
    }
  };
  
  export const verifyToken= async (req: Request, res: Response)=>{
    try {
      const {token}=req.params;


      const verified = jwt.verify(token, jwtSecret);

      if (!verified) {
        return res.status(401).json({ Error: "You are yet to be verified" });
      }
  
      const { id } = verified as { [key: string]: string };
  
      const user = await User.findOne({
        where: { id },
      });

      if(!user){
        return res.status(404).json({ Error: "You are yet to be verified" });
      }
      return res.status(200).json({ message: "Verified Successfully" });
    } catch (error) {
      
    }
    }