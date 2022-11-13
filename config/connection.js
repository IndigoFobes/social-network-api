const { connect, connection } = require('mongoose');

// ** TODO: after deploying to heroku, replace the herokuConnectionString with the MongoDB Alas connection string
const connectionString =
  process.env.MONGODB_URI // || herokuConnectionString


connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connection;