import { Request, Response, NextFunction } from 'express';
import { CreatePersonDto } from '../dtos/create-person.dto';
import { UpdatePersonDto } from '../dtos/update-person.dto';
import * as personService from '../services/person.service';

export const getAllPersons = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await personService.findAllPersons();
    res.status(200).json({ data, message: '' });
  } catch (error) {
    next(error);
  }
};

export const getPersonById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const personId = +req.params.id;
    const data = await personService.findPersonById(personId);
    res.status(200).json({ data, message: '' });
  } catch (error) {
    next(error);
  }
};

export const createPerson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dto = req.body as CreatePersonDto;
    const data = await personService.createPerson(dto);
    res.status(201).json({ data, message: 'created person' });
  } catch (error) {
    next(error);
  }
};

export const updatePerson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const personId = +req.params.id;
    const dto = req.body as UpdatePersonDto;
    const data = await personService.updatePerson(personId, dto);
    res.status(200).json({ data, message: '' });
  } catch (error) {
    next(error);
  }
};

export const deletePerson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const personId = +req.params.id;

    const data = await personService.deletePerson(personId);
    res.status(200).json({ data, message: '' });
  } catch (error) {
    next(error);
  }
};
