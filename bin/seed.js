const mongoose = require('mongoose');
const Apartment = require('../models/Apartment.model');
const apartments = require('./apartments.json');

require('../config/db.config');

mongoose.connection.once('open', () => {
  mongoose.connection.dropCollection('apartments')
    .then(() => {
      console.log('Collection dropped');
      return Apartment.create(apartments);
    })
    .then(() => {
      console.log('Collection created');
      mongoose.connection.close();
    })
    .catch(err => console.error(err))
    .finally(() => {
      mongoose.connection.close()
      .then(() => {
        console.log('End of seeds');
      })
      .catch((err) => console.error('Error while disconnecting', err))
      .finally(() => process.exit(0))
    });
});
