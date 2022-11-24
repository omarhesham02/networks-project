const loginController = require('../controllers/loginController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', loginController.login);


module.exports = router;