import { Router } from "express";
import { CreateAccount, VerifyOTP, getAccountByuserId, getAccountDetails } from "../Controllers/accountController";
import { auth } from "../middleware/auth";

const router: Router = Router();

router.get("/getAccount",auth, getAccountByuserId)
router.get("/account",auth, getAccountDetails)
router.post('/addAccount', auth, CreateAccount);
router.post("/verifyOtp", VerifyOTP);
router.get("/:userId", getAccountByuserId);


export default router