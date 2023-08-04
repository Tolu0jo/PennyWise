import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db';

export interface PlannedPaymentAttributes {
    id: string;
    category: string;
    amount: number;
    frequency: string;
    userId: string;
    status: boolean;
    amountSpent: number;
}

class PlannedPayment extends Model<PlannedPaymentAttributes>{
    id!: string;
    category!: string;
    amount!: number;
    frequency!: string;
    userId!: string;
    status!: boolean;
    amountSpent!: number;
}
 

PlannedPayment.init(
    {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    frequency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    amountSpent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'PlannedPayment',
    timestamps: true,
}
)

export default PlannedPayment;