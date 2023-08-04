
import { Request, Response } from "express";
import Expenditure from "../Models/expenseModel";
import Account from "../Models/accountModel";
import axios from "axios";
import DailyNeeds from "../Models/dailyNeedsModel";
import { exist } from "joi";
import PlannedPayment from "../Models/plannedPaymentModel";
import SavingsTarget from "../Models/savingsModel";
import {v4 as uuidv4} from "uuid"

export const addExpenditure = async (req: Request | any, res: Response) => {
  try {
    const userId = req.user.id;
    const { id, category, narration, amount, transaction_date, description } =
      req.body;

    const dailyExistingCategory = await DailyNeeds.findOne({
      where: { category, userId },
    });
    const plannedExistingCategory = await PlannedPayment.findOne({
      where: { category, userId },
    });
    const savingExistingCategory = await SavingsTarget.findOne({
      where: { savingPurpose: category, userId },
    });
    if (dailyExistingCategory) {
      const newAmountSpent = dailyExistingCategory.amountSpent + Number(amount);
      const dailyNeed = await dailyExistingCategory.update({
        amountSpent: newAmountSpent,
      });
      const newExpenditure = await Expenditure.create({
        id,
        userId,
        category,
        narration,
        amount,
        transaction_date,
        description,
      });
      res.status(201).json({
        message: "New Expenditure Successfully added dailyNeed updated",
        dailyNeed,
        newExpenditure,
      });
    } else {
      if (plannedExistingCategory) {
        const newAmountSpent =
          plannedExistingCategory.amountSpent + Number(amount);
        const plannedPayment = await plannedExistingCategory.update({
          amountSpent: newAmountSpent,
        });
        const newExpenditure = await Expenditure.create({
          id,
          userId,
          category,
          narration,
          amount,
          transaction_date,
          description,
        });
        res.status(201).json({
          message: "New Expenditure Successfully added, plannedPayment updated",
          plannedPayment,
          newExpenditure,
        });
      } else {
        if (savingExistingCategory) {
          const newAmountSpent =
            savingExistingCategory.amountSpent + Number(amount);
          const saving = await savingExistingCategory.update({
            amountSpent: newAmountSpent,
          });
          const newExpenditure = await Expenditure.create({
            id,
            userId,
            category,
            narration,
            amount,
            transaction_date,
            description,
          });

          res.status(201).json({
            message: "New Expenditure Successfully added, saving updated",
            newExpenditure,
            saving,
          });
        } else {
          return res.status(404).json({ Error: "Category not Found" });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const AddCashExpense = async (req: Request | any, res: Response) => {
  try {
    const userId = req.user.id;
    const { category, narration, amount, description } = req.body;

    const dailyExistingCategory = await DailyNeeds.findOne({
      where: { category, userId },
    });
    const plannedExistingCategory = await PlannedPayment.findOne({
      where: { category, userId },
    });
    const savingExistingCategory = await SavingsTarget.findOne({
      where: { savingPurpose: category, userId },
    });
    if (dailyExistingCategory) {
      const newAmountSpent = dailyExistingCategory.amountSpent + Number(amount);
      const dailyNeed = await dailyExistingCategory.update({
        amountSpent: newAmountSpent,
      });
      const newExpenditure = await Expenditure.create({
        id: uuidv4(),
        userId,
        category,
        narration,
        amount,
        transaction_date: new Date().toISOString(),
        description,
      });
      res.status(201).json({
        message: "New Expenditure Successfully added dailyNeed updated",
        dailyNeed,
        newExpenditure,
      });
    } else {
      if (plannedExistingCategory) {
        const newAmountSpent =
          plannedExistingCategory.amountSpent + Number(amount);
        const plannedPayment = await plannedExistingCategory.update({
          amountSpent: newAmountSpent,
        });
        const newExpenditure = await Expenditure.create({
          id: uuidv4(),
          userId,
          category,
          narration,
          amount,
          transaction_date: new Date().toISOString(),
          description,
        });
        res.status(201).json({
          message: "New Expenditure Successfully added, plannedPayment updated",
          plannedPayment,
          newExpenditure,
        });
      } else {
        if (savingExistingCategory) {
          const newAmountSpent =
            savingExistingCategory.amountSpent + Number(amount);
          const saving = await savingExistingCategory.update({
            amountSpent: newAmountSpent,
          });
          const newExpenditure = await Expenditure.create({
            id: uuidv4(),
            userId,
            category,
            narration,
            amount,
            transaction_date: new Date().toISOString(),
            description,
          });

          res.status(201).json({
            message: "New Expenditure Successfully added, saving updated",
            newExpenditure,
            saving,
          });
        } else {
          return res.status(404).json({ Error: "Category not Found" });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};
export const editExpenditure = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    await Expenditure.update({ category }, { where: { id } });
    res
      .status(200)
      .json({ success: true, message: "Expenditure successfully updated" });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getAllExpenditure = async (req: Request | any, res: Response) => {
  try {
    const expenditures = await Expenditure.findAll({
      where: {
        userId: req.user.id,
      },
    });

    res.status(200).json({ success: true, expenditures });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getWaitingExpense = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const expenditures = await Expenditure.findAll({
      where: {
        userId: id,
      },
    });
    const expenseIds: string[] = expenditures.map((expense) => {
      return expense.id;
    });

    const account = await Account.findAll({ where: { userId: id } });
    const accounts: any = account?.map((acc) => {
      return acc.accountNumber;
    });

    const apiCall = accounts.map((acc: string) => {
      return axios.get(
        `https://open-banking.onrender.com/transaction/usertransaction/?account_number=${acc}`
      );
    });

    let response: any = [];

    await Promise.all(apiCall).then((res: any) => {
      res.map((item: any) => response.push(item.data.withdrawals));
    });

    const withdrawals = response.flat();

    const data = withdrawals.filter((data: any) => {
      return !expenseIds.includes(data.id);
    });

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getExpenseById = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.params;
    const expense = await Expenditure.findByPk(id);
    await expense?.update({});
    if (!expense) return res.status(404).json({ Error: "Expense not found" });
    return res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const updateExpense = async (req: Request | any, res: Response) => {
  const { id } = req.params;
  try {
    const { category, narration, amount, description } = req.body;
    const expense = await Expenditure.findByPk(id);
    if (!expense) return res.status(404).json({ Error: "Expense not found" });

    const expenditure = await expense?.update({
      category,
      narration,
      amount,
      transaction_date: new Date().toISOString(),
      description,
    });
    if (!expenditure)
      return res.status(404).json({ Error: "Expense not updated" });

    return res.status(200).json({ expenditure, message: "Expense updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};



export const deleteExpense = async (req: Request | any, res: Response) => {
  try {
    const userId = req.user.id
    const { id } = req.params;
    const expense = await Expenditure.findByPk(id);

    if (!expense) return res.status(404).json({ Error: "Expense not found" });
   
    const amount = expense.amount;
   
    const category = expense.category;
    
    const dailyExistingCategory = await DailyNeeds.findOne({
      where: { category, userId },
    });
    const plannedExistingCategory = await PlannedPayment.findOne({
      where: { category, userId },
    });
  
 
    const savingExistingCategory = await SavingsTarget.findOne({
      where: { savingPurpose: category, userId},
    });

    if (dailyExistingCategory) {
      const newAmountSpent = dailyExistingCategory.amountSpent - Number(amount);
      const dailyNeeds = await dailyExistingCategory.update({
        amountSpent: newAmountSpent,
      });
      await expense.destroy()
      return res.status(200).json({ message: "Expense deleted" });

    } else if (plannedExistingCategory) {
      const newAmountSpent = plannedExistingCategory.amountSpent - Number(amount);
      const plannedPayment = await plannedExistingCategory.update({
        amountSpent: newAmountSpent,
      });
      await expense.destroy()
      return res.status(200).json({ message: "Expense deleted" });

    } else if (savingExistingCategory) {
      const newAmountSpent = savingExistingCategory.amountSpent - Number(amount);
      const saving = await savingExistingCategory.update({
        amountSpent: newAmountSpent,
      });
      await expense.destroy()
      return res.status(200).json({ message: "Expense deleted" });

    } else {
      return res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};


export const getAllCategories = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.user;
    const dailyneeds = await DailyNeeds.findAll({ where: { userId: id } });
 
    const dailyNeedsCategory = dailyneeds.map((daily) => daily.category);
  
    const plannedPayments = await PlannedPayment.findAll({
      where: { userId: id },
    });
  
    const plannedPaymentsCategory = plannedPayments.map(
      (planned) => planned.category
    );
  
    const savings = await SavingsTarget.findAll({ where: { userId: id } });
    const savingPurpose = savings.map((saving) => ("Savings-"  + saving.savingPurpose));

    const categories = dailyNeedsCategory
      .concat(plannedPaymentsCategory)
      .concat(savingPurpose);

    const allCategories = categories.flat();
     
    return res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
