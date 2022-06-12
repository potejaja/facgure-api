const express = require("express");
const router = express.Router();
const dataprive = require("./dataprive");
const contact = require("./contact");
const company = require("./company");
const blog = require("./blog");
const our_solution = require("./our_solution");

router.use("/dataprive", dataprive);
router.use("/contact", contact);
router.use("/company", company);
router.use("/blog", blog);
router.use("/our_solution", our_solution);

module.exports = router;
