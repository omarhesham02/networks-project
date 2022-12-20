const annapurnaController = require('../controllers/annapurnaController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('annapurna');
});

router.post('/', annapurnaController.annapurna);



module.exports = router;