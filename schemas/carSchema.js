const Joi = require('joi');

const id = Joi.number().integer();
const mark = Joi.string();
const model = Joi.string();
const image = Joi.string().uri();
const value = Joi.number().integer();
const status = Joi.string();

const createCarSchema = Joi.object({
  mark: mark.required(),
  model: model.required(),
  image: image,
  value: value.required(),
  status: status
});

const updateCarSchema = Joi.object({
  mark: mark,
  model: model,
  image: image,
  value: value,
  status: status
});

const getCarSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCarSchema, updateCarSchema, getCarSchema }
