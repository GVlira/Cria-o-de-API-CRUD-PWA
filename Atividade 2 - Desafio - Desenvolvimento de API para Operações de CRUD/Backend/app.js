const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Importa o middleware cors
const bodyParser = require('body-parser');
require('dotenv').config() // Carregar variáveis de ambiente

const app = express();

// Middleware
app.use(cors());  // Ativa o CORS para todas as rotas
const corsOptions = { //limitar o acesso do CORS
     origin: 'http://127.0.0.1:5500',
     optionsSuccessStatus: 200
 };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb'})),  // Aumentando o limite de tamanho
app.use(bodyParser.urlencoded({ limit: '50mb', exteded: true })); // Para dados enviados via URL encoded
app.use(express.static('public'));
app.use(express.json()); // Parse JSON

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => cosole.log('Conectado ao MongoDB'))
  .catch(err => console.log('Erro ao conectar ao MongoDB',err.message));

// Rotas
const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));