const express = require("express");
const router = express.Router();
const blog = require("../../controllers/blog");

router.route("/getData").get(blog.GetData);

module.exports = router;
