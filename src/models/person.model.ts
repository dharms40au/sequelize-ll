import { DataTypes, Model, Sequelize } from 'sequelize';
import { TodoModel } from './todo.model';

interface IPerson {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PersonCreationAttributes
  extends Omit<IPerson, 'id' | 'createdAt' | 'updatedAt'> {}

export class PersonModel
  extends Model<IPerson, PersonCreationAttributes>
  implements IPerson
{
  public id: number;
  public name: string;
  public email: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

export default function (sequelize: Sequelize): typeof PersonModel {
  PersonModel.init(
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
      email: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'person',
      timestamps: true,
    }
  );

  PersonModel.hasMany(TodoModel, { foreignKey: 'person_id' });

  TodoModel.belongsTo(PersonModel, { foreignKey: 'person_id' });

  return PersonModel;
}
