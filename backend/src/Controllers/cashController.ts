import { Response, Request } from "express";
import Cash from "../Models/cashIncomeModel";
import { v4 as uuidv4 } from "uuid";
import { ValidateCashIncome, options } from "../Utils/joiValidation";
import { where } from "sequelize";
import Account from "../Models/accountModel";
import axios from "axios";

export const addCash = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const { narration, amount } = req.body;

    const validationResult = ValidateCashIncome.validate(req.body, options);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }

    const cash = await Cash.create({
      id: uuidv4(),
      userId: id,
      amount,
      narration,
      account: "Cash",
    });

    return res.status(201).json({ message: "Cash added successfully", cash });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getCashIncome = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const cashIncome = await Cash.findAll({ where: { userId: id } });
    if (cashIncome)
      return res
        .status(200)
        .json({ message: "Cash Income retrived Successfully", cashIncome });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getAllIncome = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;

    const account = await Account.findAll({ where: { userId: id } });
    const accounts: any = account?.map((acc) => {
      return acc.accountNumber
    });

    const apiCall = accounts.map((acc: string) => {
     return axios.get(
        `https://open-banking.onrender.com/transaction/usertransaction/?account_number=${acc}`
      );
    });

    let response:any = []

    await Promise.all(apiCall).then((res:any) => {
     res.map((item:any) => response.push(item.data.deposits))
    });
    
    const cashIncome = await Cash.findAll({ where: { userId: id } });

    const income = [...cashIncome,...response].flat();
    
    res.status(200).json({message:"Income retrieved Successfully",income})

  } catch (error) {
    console.log(error);

  }
};
export const updateCashIncome = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount, narration } = req.body;
    const cashToUpdate = await Cash.findOne({ where: { id } });
    if (!cashToUpdate) {
      return res.status(404).json({ Error: "No Cash Income Found" });
    }
    const update = await cashToUpdate.update({
      amount,
      narration,
    });
    return res
      .status(200)
      .json({ message: "Cash Income Updated Successfully", update });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const deleteCash = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCash = await Cash.destroy({ where: { id } });
    if (!deletedCash) {
      return res.status(404).json({ Error: "No Cash Income Found" });
    }
    return res
      .status(200)
      .json({ message: "Cash income deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
