const express = require('express');

const CarService = require('./../services/carService');
const validatorHandler = require('../middlewares/validatorHandler');
const { updateCarSchema, createCarSchema, getCarSchema } = require('./../schemas/carSchema');

const router = express.Router();
const service = new CarService();

router.get('/', async (req, res, next) => {
  try {
    const cars = await service.find();
    res.json(cars);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCarSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const findone = await service.findOne(id);
      res.json(findone);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCarSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCreate = await service.create(body);
      res.status(201).json(newCreate);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCarSchema, 'params'),
  validatorHandler(updateCarSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateone = await service.update(id, body);
      res.json(updateone);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCarSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

