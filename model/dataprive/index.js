const db = require("../../config/mongoDb");

exports.getList = async () => {
  var result = await db.find("dataprive");
  return result;
};
