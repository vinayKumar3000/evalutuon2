const router = require("express").Router();
const Booking = require("../models/Booking");

//Booking POST
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    console.log(newBooking);
    const savedBooking = await newBooking.save();
    console.log(savedBooking);
    res.status(200).json(savedBooking);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

//DELETE Booking
router.delete("/:id", async (req, res) => {
  try {
    try {
      await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json("your booking has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Booking
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
