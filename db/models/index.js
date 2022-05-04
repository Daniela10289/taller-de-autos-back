const { User, UserSchema } = require('./userModel');
const { Car, CarSchema } = require('./carModel');

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Car.init(CarSchema, Car.config(sequelize));

  // User.associate(sequelize.models);
}

module.exports = setupModels;
