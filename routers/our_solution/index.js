const express = require("express");
const router = express.Router();
const our_solution = require("../../controllers/our_solution");

router.route("/getData").get(our_solution.GetData);

module.exports = router;
