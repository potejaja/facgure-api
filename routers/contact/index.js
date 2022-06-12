const express = require("express");
const router = express.Router();
const contact = require("../../controllers/contact");

router.route("/getData").get(contact.GetData);

module.exports = router;
