const mongoose = require('mongoose');

const databaseConnection = async () => {
  const connection = await mongoose.connect('mongodb://users-database/users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = databaseConnection;
