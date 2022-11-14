const { connect, connection } = require('mongoose');

// ** TODO: after deploying to heroku, replace the 'mongodb://localhost:3001/test' with the MongoDB Alas connection string
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost/test'


connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connection;