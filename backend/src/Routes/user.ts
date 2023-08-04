import express from "express";

import { getAllUsers, getUserById, deleteUser } from '../Controllers/userController';
import { auth } from "../middleware/auth";

const router = express.Router();


// User Route
router.get("/getUsers", getAllUsers);
router.get('/',auth, getUserById);
router.delete("/deleteUser/:userId", deleteUser);


export default router;