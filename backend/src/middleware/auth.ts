import Express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../Models/userModel";
import { jwtSecret } from "../Config/config";


export const auth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorisation = req.headers.authorization;

    if (!authorisation) {
      return res.status(401).json({ Error: "Hey there!, you need to sign up" });
    }

    const token = authorisation.slice(7, authorisation.length);
  
    const verified = jwt.verify(token, jwtSecret);

    if (!verified) {
      return res.status(401).json({ Error: "You are yet to be verified" });
    }
   
    const { id } = verified as { [key: string]: string };

    const user = await User.findOne({
      where: { id },
    });

    if (!user) {
      return res
        .status(401)
        .json({ Error: "Hey there!, you need to upgrade your account" });
    }
    req.user = verified;
   
    next();
  } catch (error) {
    return res.status(401).json({ Error: "Hey there!,kindly sign up" });
  }
};
