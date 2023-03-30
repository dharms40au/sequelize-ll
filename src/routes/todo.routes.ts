import express, { Request, Response, NextFunction } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todo.controller';

const router = express.Router();

const path = '/todos';

router.get(`${path}`, getAllTodos);
router.get(`${path}/:id`, getTodoById);
router.post(`${path}`, createTodo);
router.put(`${path}/:id`, updateTodo);
router.delete(`${path}/:id`, deleteTodo);

export default router;
