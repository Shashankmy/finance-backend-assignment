const express = require("express");
const Record = require("../models/Record");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

router.post("/", async (req, res) => {
  const record = await Record.create(req.body);
  res.json(record);
});

router.get("/", auth, async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

module.exports = router;
