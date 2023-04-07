import { DataTypes, Model, Sequelize } from 'sequelize';

interface ITodo {
  id: number;
  name: string;
  description: string;
  person_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TodoCreationAttributes
  extends Omit<ITodo, 'id' | 'createdAt' | 'updatedAt'> {}

export class TodoModel
  extends Model<ITodo, TodoCreationAttributes>
  implements ITodo
{
  public id: number;
  public name: string;
  public description: string;
  public person_id: number;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

export default function (sequelize: Sequelize): typeof TodoModel {
  TodoModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(240),
        allowNull: false,
      },
      person_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: 'todo',
      modelName: 'todos',
      timestamps: true,
    }
  );

  return TodoModel;
}
