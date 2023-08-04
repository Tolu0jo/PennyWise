import { Request, Response } from 'express';
import  SavingsTarget  from '../Models/savingsModel';
import {v4 as uuidv4} from "uuid"


export const addSavingsTarget = async (req: Request | any, res: Response) => {
  try {

      const userId = req.user.id
      const id = uuidv4()
      const { savingPurpose, frequency, targetAmount, targetDate } = req.body;
      const newTarget = await SavingsTarget.create({
        id,
        savingPurpose,
        frequency,
        targetAmount,
        amountSpent: 0,
        targetDate,
        userId,
      });
  
      return res.status(201).json(newTarget);
    } catch (error) {
      console.error('Error adding savings target:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const editSavingsTarget = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { savingPurpose, frequency, targetAmount, targetDate } = req.body;
      const target = await SavingsTarget.findByPk(id);
  
      if (!target) {
        return res.status(404).json({ error: 'Savings target not found' });
      }
    const update =  await target.update({
        savingPurpose,
        frequency,
      targetAmount,
        targetDate,
      });
  
      return res.status(200).json(update);
    } catch (error) {
      console.error('Error editing savings target:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const deleteSavingsTarget = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const target = await SavingsTarget.findByPk(id);
  
      if (!target) {
        return res.status(404).json({ error: 'Savings target not found' });
      }
      await target.destroy();
  
      return res.status(200).json({ message: 'Savings target deleted successfully' });
    } catch (error) {
      console.error('Error deleting savings target:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const getAllSavingsTargets = async (req: Request| any, res: Response) => {
    try {
      const targets = await SavingsTarget.findAll({where:{userId:req.user.id}});
  
      return res.status(200).json(targets);
    } catch (error) {
      console.error('Error retrieving savings targets:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };