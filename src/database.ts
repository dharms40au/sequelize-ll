import { Sequelize } from 'sequelize';
import TodoModel from './models/todo.model';
import PersonModel from './models/person.model';
import CategoryModel from './models/category.model';
import TodoCategoryModel from './models/todo_category.model';

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'mydb',
  username: 'root',
  password: 'password',
  host: 'localhost',
  port: 3306,
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
});

const DB = {
  Todos: TodoModel(sequelize),
  Persons: PersonModel(sequelize),
  Categories: CategoryModel(sequelize),
  TodoCategoryJoin: TodoCategoryModel(sequelize),
  sequelize,
  Sequelize,
};

export default DB;
