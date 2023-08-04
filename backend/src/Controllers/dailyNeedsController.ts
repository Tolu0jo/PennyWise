import { Request, Response } from "express";
import DailyNeeds from "../Models/dailyNeedsModel";
import { v4 as uuidv4 } from "uuid";

export const addCategory = async (req: Request | any, res: Response) => {
  try {
    const id = uuidv4();
    const userId = req.user.id;
    const { category, description, setLimit, amountSpent } = req.body;
    const newCategory = await DailyNeeds.create({
      id,
      userId,
      category,
      description,
      setLimit,
      amountSpent: 0
    });

    res.status(201).json({
      success: true,
      message: "Category added successfully ",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to add new category" });
  }
};

export const editCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description, setLimit } = req.body;
    await DailyNeeds.update({ description, setLimit }, { where: { id } });
    res.json({
      success: true,
      message: "Category updated successfully",
      editCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update category" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await DailyNeeds.destroy({ where: { id } });
    res.json({
      success: true,
      message: "Category deleted Successfully",
      deleteCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete category" });
  }
};



export const getAllCategories = async (req: Request | any, res: Response) => {
  try {
    const {id}=req.user
    const categories = await DailyNeeds.findAll({where:{userId:id}});
    res.json({ success: true, categories });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch categories" });
  }
};
