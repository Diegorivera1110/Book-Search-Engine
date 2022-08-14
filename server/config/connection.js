const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://diegorivera1110:softgrass123@cluster0.ojik8ln.mongodb.net/googlebooks`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
