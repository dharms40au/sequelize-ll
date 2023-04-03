import express from 'express';
import {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
} from '../controllers/person.controller';

const router = express.Router();

const path = '/persons';

router.get(`${path}`, getAllPersons);
router.get(`${path}/:id`, getPersonById);
router.post(`${path}`, createPerson);
router.put(`${path}/:id`, updatePerson);
router.delete(`${path}/:id`, deletePerson);

export default router;
