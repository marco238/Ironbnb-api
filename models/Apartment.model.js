const mongoose = require("mongoose");

const ApartmentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    default: "https://placehold.co/400x400",
  },
}, {
  timestamps: true,
});

const Apartment = mongoose.model("Apartment", ApartmentSchema);
module.exports = Apartment;
