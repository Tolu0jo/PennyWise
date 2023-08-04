import express from "express"
import { addCash, deleteCash, getAllIncome, getCashIncome, updateCashIncome } from "../Controllers/cashController";
import { auth } from "../middleware/auth";



const router = express.Router()

router.post('/add',auth,addCash);
router.get("/",auth, getCashIncome);
router.get("/income",auth,getAllIncome);
router.put("/update/:id", updateCashIncome);
router.delete("/delete/:id", deleteCash);

export default router
