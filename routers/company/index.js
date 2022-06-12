const express = require("express");
const router = express.Router();
const company = require("../../controllers/company");

router.route("/getData").get(company.GetData);

module.exports = router;
