import DB from '../database';
import { CreatePersonDto } from '../dtos/create-person.dto';
import { UpdatePersonDto } from '../dtos/update-person.dto';
import { HttpException } from '../exceptions/HttpException';
import { TodoModel } from '../models/todo.model';

const { Persons } = DB;

const findAllPersons = async () => {
  return Persons.findAll({
    include: [TodoModel],
  });
};

const findPersonById = async (id: number) => {
  const person = await Persons.findByPk(id);
  if (!person)
    throw new HttpException(409, `Person with id ${id} does not exist.`);

  return person;
};

const createPerson = async (dto: CreatePersonDto) => {
  return Persons.create(dto);
};

const updatePerson = async (personId: number, dto: UpdatePersonDto) => {
  await findPersonById(personId);

  const [affectedCount] = await Persons.update(dto, {
    where: { id: personId },
  });

  if (affectedCount === 0)
    throw new HttpException(500, 'Update did not succeed.');

  return findPersonById(personId);
};

const deletePerson = async (id: number) => {
  const person = await findPersonById(id);

  await Persons.destroy({ where: { id } });

  return person;
};

export {
  findAllPersons,
  findPersonById,
  createPerson,
  updatePerson,
  deletePerson,
};
