const baliController = require('../controllers/baliController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('bali');
});

router.post('/', baliController.bali);



module.exports = router;
