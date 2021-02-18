const express = require("express");
const router = express.Router();

const User = require("../models/user");
router.get("/", (req, res) => {

    User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    User.create(req.body).then((newUser) => {
      console.log(newUser);
      res.json(newUser);
    });
  });

  router.put("/:id", (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedObject) => {
      res.json(updatedObject);
    });
});
router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id).then((result) => {
      res.json(result);
    });
  });
  module.exports = router;