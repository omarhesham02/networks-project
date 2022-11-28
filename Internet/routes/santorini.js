const santoriniController = require('../controllers/santoriniController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('santorini');
});

router.post('/', santoriniController.santorini);



module.exports = router;