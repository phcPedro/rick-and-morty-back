const mongoose = require('mongoose');

const connecteTodatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/Rick-and-Mory', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado ao MONGODB!'))
    .catch((error) =>
      console.log(
        `Erro, não foi possivel conectar com o MongoDB, error ${error}`,
      ),
    );
};

module.exports = connecteTodatabase;
