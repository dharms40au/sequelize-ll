import { NextFunction, Request, Response } from 'express';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { UpdateTodoDto } from '../dtos/update-todo.dto';
import * as todoService from '../services/todo.service';

export const getAllTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await todoService.findAllTodos();
    res.status(200).json({ data, message: 'find all' });
  } catch (error) {
    next(error);
  }
};

export const getTodoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todoId = +req.params.id;
    const data = await todoService.findById(todoId);
    res.status(200).json({ data, message: `find todo with id: ${todoId}` });
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dto = req.body as CreateTodoDto;
    const data = await todoService.createTodo(dto);
    res.status(201).json({ data, message: 'todo created' });
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todoId = +req.params.id;
    const dto = req.body as UpdateTodoDto;
    const data = await todoService.updateTodo(todoId, dto);
    res.status(200).json({ data, message: 'todo updated' });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todoId = +req.params.id;

    const deletedTodo = await todoService.deleteTodo(todoId);

    res
      .status(200)
      .json({ data: deletedTodo, message: `Deleted todo with id ${todoId}` });
  } catch (error) {
    next(error);
  }
};
