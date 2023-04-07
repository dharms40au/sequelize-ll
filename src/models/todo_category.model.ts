import {
  Model,
  InferCreationAttributes,
  Sequelize,
  DataTypes,
} from 'sequelize';
import { TodoModel } from './todo.model';
import { CategoryModel } from './category.model';

interface ITodoCategory {
  todo_id: number;
  category_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class TodoCategoryModel extends Model<
  ITodoCategory,
  InferCreationAttributes<TodoCategoryModel>
> {
  public todo_id: number;
  public category_id: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

export default function (sequelize: Sequelize): typeof TodoCategoryModel {
  TodoCategoryModel.init(
    {
      todo_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      tableName: 'todo_category',
      timestamps: true,
      sequelize,
    }
  );

  TodoModel.belongsToMany(CategoryModel, {
    through: 'todo_category',
  });

  CategoryModel.belongsToMany(TodoModel, {
    through: 'todo_category',
  });

  TodoCategoryModel.belongsTo(TodoModel);
  TodoCategoryModel.belongsTo(CategoryModel);

  TodoModel.hasMany(TodoCategoryModel);
  CategoryModel.hasMany(TodoCategoryModel);

  return TodoCategoryModel;
}
