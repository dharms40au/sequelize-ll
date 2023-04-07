import { DataTypes, Model, Sequelize } from 'sequelize';

interface ICategory {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CategoryCreationAttributes
  extends Omit<ICategory, 'id' | 'createdAt' | 'updatedAt'> {}

export class CategoryModel
  extends Model<ICategory, CategoryCreationAttributes>
  implements ICategory
{
  public id: number;
  public name: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

export default function (sequelize: Sequelize): typeof CategoryModel {
  CategoryModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'category',
      modelName: 'categories',
      sequelize,
    }
  );

  return CategoryModel;
}
