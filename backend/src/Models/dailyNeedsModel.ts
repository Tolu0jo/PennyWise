import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/db';

export interface DailyNeedsAttributes {
    id: string;
    category: string;
    setLimit: number;
    description: string;
    amountSpent: number;
    userId: string;
}

class DailyNeeds extends Model<DailyNeedsAttributes>{
    id!: string;
    category!: string;
    description!: string;
    setLimit!: number;
    amountSpent!: number;
    userId!: string;
}
 

DailyNeeds.init(
    {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    setLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amountSpent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'DailyNeeds',
    timestamps: true,
}
)

export default DailyNeeds;