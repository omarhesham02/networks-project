const registrationerrorController = require('../controllers/registrationerrorController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('registrationerror');
});

router.post('/', registrationerrorController.registrationerror);



module.exports = router;