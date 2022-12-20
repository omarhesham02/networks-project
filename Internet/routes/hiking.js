const hikingController = require('../controllers/hikingController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('hiking');
});

router.post('/', hikingController.hiking);



module.exports = router;