const incaController = require('../controllers/incaController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('inca');
});

router.post('/', incaController.inca);



module.exports = router;