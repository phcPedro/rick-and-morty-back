const mongoose = require('mongoose');

const connecteTodatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado ao MONGODB Atlas!'))
    .catch((error) =>
      console.log(
        `Erro, não foi possivel conectar com o MongoDB, error ${error}`,
      ),
    );
};

module.exports = connecteTodatabase;
