import { Model, DataTypes } from "sequelize";
import sequelize from "../Config/db";

export interface CashAtrributes {
  id: string;
  userId: string;
  narration: string;
  amount: string;
  account:string;
 
}

class Cash extends Model<CashAtrributes> {
  id!: string;
  userId!: string;
  narration!: string;
  amount!:string;
  account!:string;
}

Cash.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    narration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Cash",
      },
  
  },
  {
    sequelize,
    modelName: "Cash",
    timestamps: true,
  }
);

export default Cash;

