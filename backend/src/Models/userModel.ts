import { Model, DataTypes } from "sequelize";
import sequelize from "../Config/db";
import Account from "./accountModel";

export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  otp: number;
  otp_expiry: Date | null;
  verified: boolean;
  phone: string;
  bvn: string;
  MOI: string; // Mode of Identification
  avatar: string;
}

class User extends Model<UserAttributes> {
  id!: string;
  firstName!: string;
  lastName!: string;
  password!:string;
  email!: string;
  otp!: number;
  otp_expiry!: Date | null;
  verified!: boolean;
  phone!: string;
  bvn!: string;
  MOI!: string;
  avatar!: string;

  static associate() {
    User.hasMany(Account, { foreignKey: "userId", as: "accounts" });
  }
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    bvn: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    MOI: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    otp_expiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png"
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true, // Disable timestamps (createdAt and updatedAt columns)
  }
);

export default User;

