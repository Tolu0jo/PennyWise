import express from 'express';
import {
  addSavingsTarget,
  editSavingsTarget,
  deleteSavingsTarget,
  getAllSavingsTargets,
} from '../Controllers/savingsController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/savings-targets',auth, addSavingsTarget);
router.put('/savings-targets/:id',auth, editSavingsTarget);
router.delete('/savings-targets/:id',auth, deleteSavingsTarget);
router.get('/savings-targets', auth, getAllSavingsTargets);

export default router;