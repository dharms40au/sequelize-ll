import { Request, Response, NextFunction } from 'express';
import { CreatePersonDto } from '../dtos/create-person.dto';
import { UpdatePersonDto } from '../dtos/update-person.dto';
import * as personService from '../services/person.service';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { HttpException } from '../exceptions/HttpException';

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

    await validateRequest(CreatePersonDto, req);

    // const errors = await validate(plainToInstance(CreatePersonDto, dto), {
    //   skipMissingProperties: true,
    //   whitelist: true,
    //   forbidNonWhitelisted: true,
    // });
    //
    // if (errors.length) {
    //   const message = errors
    //     .map((error: ValidationError) => Object.values(error.constraints))
    //     .join(',');
    //   throw new HttpException(400, message);
    // }

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

    await validateRequest(UpdatePersonDto, req);

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

const validateRequest = async (type: any, req: Request) => {
  const errors = await validate(plainToInstance(type, req.body), {
    skipMissingProperties: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  });

  if (errors.length) {
    const message = errors
      .map((error: ValidationError) => Object.values(error.constraints))
      .join(',');
    throw new HttpException(400, message);
  }
};
