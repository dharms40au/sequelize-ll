import express from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todo.controller';
import validationMiddleware from '../middleware/validation.middleware';
import { UpdateTodoDto } from '../dtos/update-todo.dto';

const router = express.Router();

const path = '/todos';

router.get(`${path}`, getAllTodos);
router.get(`${path}/:id`, getTodoById);
router.post(`${path}`, createTodo);
router.put(
  `${path}/:id`,
  validationMiddleware(UpdateTodoDto, 'body'),
  updateTodo
);
router.delete(`${path}/:id`, deleteTodo);

export default router;
