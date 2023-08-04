import { Model, DataTypes } from "sequelize";
import sequelize from "../Config/db";


export interface SavingsAttributes {
  id: string;
  savingPurpose: string;
  frequency: string;
  targetDate: Date;
  amountSpent: number;
  targetAmount: number;
  userId: string;
}

class SavingsTarget extends Model<SavingsAttributes> {
  id!: string;
  savingPurpose!: string;
  frequency!: string;
  targetDate!: Date;
  amountSpent!: number;
  targetAmount!: number;
  userId!:string;
}

    SavingsTarget.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        savingPurpose: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        frequency: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        targetAmount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        amountSpent: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        targetDate: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "SavingsTarget",
        tableName: "Savings",
        timestamps: false,
      }
    );
  




export default SavingsTarget;