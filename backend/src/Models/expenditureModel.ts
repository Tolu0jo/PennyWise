import { Model, DataTypes } from "sequelize";
import sequelize from "../Config/db";

export interface ExpenseAttributes {
  id: string;
  category: string;
  narration: string;
  date: Date;
  amount: number;
}

class Expense extends Model<ExpenseAttributes> {
  id!: string;
  category!: string;
  narration!: string;
  date!: Date;
  amount!: number;
}

Expense.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    narration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Expense",
    timestamps: true,
  }
);

export default Expense;
