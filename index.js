require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/api-route');
const userRoute = require("./src/routes/users.route");
const connecteToDatabase = require('./src/database/database');
const { eventNames } = require('./src/models/Api');
const authRoute = require("./src/routes/auth.route");


const port = process.env.PORT || 3000;
const app = express();

connecteToDatabase();

app.use(express.json());
app.use(cors());

app.use('/api', routes);
app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})