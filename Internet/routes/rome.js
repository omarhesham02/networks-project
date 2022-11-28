const romeController = require('../controllers/romeController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('rome');
});

router.post('/', romeController.rome);



module.exports = router;