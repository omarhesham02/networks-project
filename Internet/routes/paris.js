const parisController = require('../controllers/parisController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('paris');
});

router.post('/', parisController.paris);



module.exports = router;