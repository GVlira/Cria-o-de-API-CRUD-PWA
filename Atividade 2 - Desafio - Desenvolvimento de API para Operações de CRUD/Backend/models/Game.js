const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    desenvolvedora: {
        type: String,
        required: true
    },
    publicadora: {
        type: String,
        required: true
    },
    plataformas: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Game', gameSchema);