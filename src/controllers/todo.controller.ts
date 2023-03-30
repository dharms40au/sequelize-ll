import { Request, Response } from 'express';

export const getAllTodos = async (req: Request, res: Response) => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  res.status(200).json({ data, message: 'find all' });
};

export const getTodoById = async (req: Request, res: Response) => {
  const todoId = +req.params.id;
  const data = { id: todoId };
  res.status(200).json({ data, message: `find todo with id: ${todoId}` });
};

export const createTodo = async (req: Request, res: Response) => {
  const data = { id: 1, ...req.body };
  res.status(201).json({ data, message: 'todo created' });
};

export const updateTodo = async (req: Request, res: Response) => {
  const todoId = +req.params.id;
  const data = { id: todoId, ...req.body };
  res.status(200).json({ data, message: 'todo updated' });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const todoId = +req.params.id;
  res.status(200).json({ message: `Deleted todo with id ${todoId}` });
};
