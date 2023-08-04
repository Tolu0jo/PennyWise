import express from "express"
import { deleteUser, getAllUsers, getUserById, login, register, resetPassword, sendEmail, verifyToken } from "../Controllers/userController"
import { auth } from "../middleware/auth";

const router = express.Router()

router.post('/login', login)
router.post("/register", register);
router.post("/send_email", sendEmail);
router.post("/verify_otp/:token", verifyToken);
router.post("/reset_password/", resetPassword);
router.get("/getUsers", getAllUsers);
// router.get('/:id', getUserById);
// router.delete("/deleteUser/:userId", deleteUser);
router.get("/getUsers", getAllUsers);
router.get('/',auth, getUserById);
router.delete("/deleteUser/:userId", deleteUser);
export default router
