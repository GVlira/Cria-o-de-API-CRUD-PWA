const Game = require('../models/Game');

// Listar(get) todas os jogos
exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
   
// Criar(create) uma descrição de jogo
exports.createGame = async (req, res) => {
    const { nome, desenvolvedora, publicadora, plataformas, releaseDate, descricao } = req.body;
    const newGame = new Game({ nome, desenvolvedora, publicadora, plataformas, releaseDate, descricao });

    try {
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Atualizar(update) uma descrição
exports.updateGame = async (req, res) => {
    try {
        const updateGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Deletar(delete) uma descrição
exports.deleteGame = async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ message: 'Descrição de jogo deletada com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};