const router = require("express").Router();

const Booking = require("../models/Booking");
const User = require("../models/User");
const bcrypt = require("bcrypt");

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    try {
      if (user) {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } else {
        res.status(400).json("cannot delete user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER by username
router.get("/:id", async (req, res) => {
  console.log(req.params.username);
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    console.log(others);
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
