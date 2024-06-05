const Apartment = require('../models/Apartment.model');

module.exports.list = (req, res, next) => {
  Apartment.find()
    .then((apartments) => {
      res.json(apartments);
    })
    .catch(next);
};

module.exports.details = (req, res, next) => {
  const { id } = req.params;

  Apartment.findById(id)
    .then((apartment) => {
      res.json(apartment);
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Apartment.create(req.body)
    .then((newApartment) => {
      res.json(newApartment);
    })
    .catch(next);
};
