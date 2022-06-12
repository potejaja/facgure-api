const { MongoClient, ServerApiVersion } = require("mongodb");
const config = require("../index");
const username = config.mdb_username;
const password = config.mdb_password;
const dbName = config.mdb_dbname;
const cluster = config.mdb_cluster;
//const authSource = "<authSource>";
//const authMechanism = "<authMechanism>";

//let uri = `mongodb+srv://${username}:${password}@${cluster}/pets?retryWrites=true&w=majority`;
//let uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${username}:${password}@facguredb.bylbcxm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

exports.find = async (collName) => {
  try {
    await client.connect();
    const database = client.db(dbName);
    const ratings = database.collection(collName);
    const result = await ratings.find().toArray();
    client.close();
    return result;
  } catch (ex) {
    throw ex;
  }
  // perform actions on the collection object

  /*try {
    console.log(password);
    await client.connect();
    const database = client.db();
    const ratings = database.collection(collName);
    const cursor = ratings.find();
    return cursor;
  } catch (ex) {
    console.log(ex);
  } finally {
    await client.close();
    console.log("xxx");
  }*/
};
