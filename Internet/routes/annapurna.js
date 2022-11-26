const annapurnaController = require('../controllers/annapurnaController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('annapurna');
});

router.post('/', annapurnaController.annapurna);



module.exports = router;