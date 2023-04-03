import { DataTypes, Model, Sequelize } from 'sequelize';

interface IPerson {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PersonCreationAttributes
  extends Omit<IPerson, 'id' | 'createdAt' | 'updatedAt'> {}

class PersonModel
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

  return PersonModel;
}
