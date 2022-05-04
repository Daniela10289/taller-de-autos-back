const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class CarService {
  constructor() {}

  async create(data) {
    const newCar = await models.Car.create(data);
    return newCar;
  }

  async find() {
    const rta = await models.Car.findAll();
    return rta;
  }

  async findOne(id) {
    const car = await models.Car.findByPk(id);
    if (!car) {
      throw boom.notFound('car not found');
    }
    return car;
  }

  async update(id, changes) {
    const car = await this.findOne(id);
    const rta = await car.update(changes);
    return rta;
  }

  async delete(id) {
    const car = await this.findOne(id);
    await car.destroy();
    return { id };
  }
}

module.exports = CarService;
