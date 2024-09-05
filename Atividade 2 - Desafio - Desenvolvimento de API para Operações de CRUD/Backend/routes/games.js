const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getAllGames);
router.post('/', gameController.createGame);
router.put('/', gameController.updateGame);
router.delete('/', gameController.deleteGame);

module.exports = router;