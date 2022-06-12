require("dotenv").config();

var env = process.env.NODE_ENV || "development";

config = {
  port: process.env.PORT,
  mdb_username: process.env.MDB_USERNAME,
  mdb_password: process.env.MDB_PASSWORD,
  mdb_cluster: process.env.MDB_CLUSTER,
  mdb_dbname: process.env.MDB_DBNAME,
};

module.exports = config;
