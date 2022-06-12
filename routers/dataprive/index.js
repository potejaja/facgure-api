const express = require("express");
const router = express.Router();
const dataprive = require("../../controllers/dataprive");

router.route("/getData").get(dataprive.GetData);

module.exports = router;
