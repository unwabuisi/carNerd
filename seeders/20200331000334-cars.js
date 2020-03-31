'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      var cars = require("../db/cardata.json");

      var car_array = [];

      cars.forEach(function(car, i) {
          car_array.push({
              make: car.make,
              fuel_type: car.fuel_type,
              num_of_doors: car.num_of_doors,
              body_style: car.body_style,
              drive_wheels: car.drive_wheels,
              engine_location: car.engine_location,
              curb_weight: car.curb_weight,
              num_of_cylinders: car.num_of_cylinders,
              horsepower: car.horsepower,
              peak_rpm: car.peak_rpm,
              city_mpg: car.city_mpg,
              highway_mpg: car.highway_mpg,
              price: car.price,
              createdAt: new Date(),
              updatedAt: new Date() 
          });
      });


      return queryInterface.bulkInsert('Cars',car_array);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
