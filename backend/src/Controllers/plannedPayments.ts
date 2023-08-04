import { Request, Response } from "express";
import PlannedPayments from "../Models/plannedPaymentModel";
import { v4 as uuidv4 } from "uuid";
import Expenditure from "../Models/expenseModel";

export const addCategory = async (req: Request | any, res: Response) => {
  try {
    const id = uuidv4();
    const userId = req.user.id;
    const { category, amount, frequency, status, amountSpent } = req.body;
    const newCategory = await PlannedPayments.create({
      id,
      userId,
      category,
      amount,
      frequency,
      status: false,
      amountSpent: 0
    });
    await newCategory.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Category added successfully",
        newCategory,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to add new category" });
  }
};

export const editCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount, frequency, status, transaction_date } = req.body;
    await PlannedPayments.update(
      { amount, frequency, status },
      { where: { id } }
    );
    res.json({ success: true, message: "Category updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update category" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await PlannedPayments.destroy({ where: { id } });
    res.json({ success: true, message: " Category deleted Successfully " });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete category" });
  }
};

export const getAllCategories = async (req: Request | any, res: Response) => {
  try {
    const {id} = req.user.id
    const categories = await PlannedPayments.findAll({where:{userId:id}});
    res.json({ success: true, categories });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch categories" });
  }
};


export const statusUpdate = async (req: Request | any, res: Response ) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const payment = await PlannedPayments.findByPk( id );

    if(!payment) {
      return res.status(404).json({ Error: "Payment Not Found" });
    }

    if(payment.status === false) {
          const updated_status = await payment.update( { 
      status: true
    } )

    const updated_payment = await updated_status.save();

    const property = await Expenditure.create({
      id,
      userId,
      category: updated_payment.category,
      narration: "",
      amount:  updated_payment.amount,
      transaction_date: new Date().toISOString(),
      description: ""
    })

    return res.status(200).json({message: "Payment paid", updated_payment, property})
    } else {
      const updated_status = await payment.update( { 
        status: false
      } )

      const updated_payment = await updated_status.save();

      const expense = await Expenditure.findByPk(id);
      if (!expense) {
        return res.status(404).json({ Error: "Expense Not Found" });
      } 
      await expense.destroy();
     return res.status(200).json({message: "Payment Unpaid", updated_payment})
    }


  } catch (error) {
    res.status(500)
  }
}
