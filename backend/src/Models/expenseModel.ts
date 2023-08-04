import { Model, DataTypes } from "sequelize";
import sequelize from '../Config/db';

export interface ExpenditureAttributes {
    id: string;
    category: string;
    narration: string;
    amount: number;
    userId: string;
    transaction_date: string;
    description:string
}

class Expenditure extends Model<ExpenditureAttributes>{
    id!: string;
    category!: string;
    narration!: string;
    amount!: string;
    userId!: string;
    transaction_date!: string;
    description!:string
}

Expenditure.init(
    {
        id:{
            type:DataTypes.STRING,
            primaryKey: true,
        },
        category:{
            type: DataTypes.STRING,
            allowNull: false
        },
        narration:{
            type: DataTypes.STRING,
            allowNull: false
        },
        amount:{
            type: DataTypes.STRING,
            allowNull: false
        },
        transaction_date:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        },
        userId:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: "Expenditure",
        timestamps: true,
    }
)

export default Expenditure;