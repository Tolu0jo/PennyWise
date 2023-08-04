import { Router } from "express";
import { auth } from "../middleware/auth";
import { AddCashExpense, addExpenditure, deleteExpense, getAllCategories, getAllExpenditure, getExpenseById, getWaitingExpense, updateExpense } from "../Controllers/expenseController";

const router: Router = Router();


router.post("/create",auth, addExpenditure);
router.post("/add-cash",auth, AddCashExpense);
router.get("/",auth,getAllExpenditure);
router.get("/get-expense/:id",auth,getExpenseById);
router.put("/edit-expense/:id",auth,updateExpense);
router.delete("/delete-expense/:id",auth,deleteExpense);
router.get("/waiting-expenses",auth,getWaitingExpense);
router.post("/cash",auth,AddCashExpense);
// router.post("/expenses/:expenseId/category", CategorizeExpense);
// router.get("/expenses/categorized", FetchCategorizedExpenses);
router.get("/categories",auth,getAllCategories);

 
export default router