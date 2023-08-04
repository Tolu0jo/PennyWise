import { Model, DataTypes } from "sequelize";
import sequelize from "../Config/db";

export interface AccountAttributes {
  id: string;
  bankName: string;
  accountNumber:string;
  accountName: string;
  bvn: string;
  identification: string;
  userId: string; 
}

class Account extends Model<AccountAttributes> {
  id!: string;
  bankName!: string;
  accountNumber!: string;
  accountName!: string;
  bvn!: string;
  identification!: string;
  userId!: string;
}


Account.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bankName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountNumber: {
      type: DataTypes.STRING, // Use DataTypes.INTEGER for integer values
      allowNull: false,
    },
    accountName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bvn: {
      type: DataTypes.STRING, // Use DataTypes.INTEGER for integer values
      allowNull: false,
    },
    identification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Account",
    timestamps: true,
  }
);

export default Account;
