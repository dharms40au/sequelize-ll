import DB from '../database';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { UpdateTodoDto } from '../dtos/update-todo.dto';
import { HttpException } from '../exceptions/HttpException';

const { Todos } = DB;

const findAllTodos = async () => {
  return Todos.findAll();
};

const findById = async (id: number) => {
  const todo = await Todos.findByPk(id);
  if (!todo) throw new HttpException(409, `Todo with id ${id} does not exist.`);

  return todo;
};

const createTodo = async (dto: CreateTodoDto) => {
  return Todos.create(dto);
};

const updateTodo = async (todoId: number, dto: UpdateTodoDto) => {
  await findById(todoId);

  const [affectedCount] = await Todos.update(dto, { where: { id: todoId } });

  if (affectedCount === 0)
    throw new HttpException(500, 'Update did not succeed.');

  return findById(todoId);
};

const deleteTodo = async (id: number) => {
  const todo = await findById(id);

  await Todos.destroy({ where: { id } });

  return todo;
};

export { findAllTodos, createTodo, updateTodo, findById, deleteTodo };
