const registrationerrorController = require('../controllers/registrationerrorController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('registrationerror');
});

router.post('/', registrationerrorController.registrationerror);



module.exports = router;