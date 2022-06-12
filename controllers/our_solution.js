const model = require("../model/our_solution");

exports.GetData = async (req, res, next) => {
  try {
    var result = await model.getList();
    return res.status(200).json({
      data: result,
    });
  } catch (ex) {
    return res.status(501).json({
      message: ex,
    });
  }
};
