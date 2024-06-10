const Apartment = require("../models/Apartment.model");

module.exports.list = (req, res, next) => {
  console.log(req.headers);
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

module.exports.update = (req, res, next) => {
  Apartment.findByIdAndUpdate(req.params.id, req.body)
    .then((editedApartment) => {
      res.json(editedApartment);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Apartment.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("Apartment deleted");
    })
    .catch(next);
};
