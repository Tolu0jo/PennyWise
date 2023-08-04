import express from "express"
import { addCategory, editCategory, deleteCategory, getAllCategories } from "../Controllers/dailyNeedsController";
import { auth } from "../middleware/auth";

const router = express.Router()

router.post('/', auth, addCategory);
router.put('/:id', auth, editCategory);
router.delete('/:id', auth, deleteCategory);
router.get('/', auth, getAllCategories);


export default router
