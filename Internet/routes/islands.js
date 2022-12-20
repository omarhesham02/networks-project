const islandsController = require('../controllers/islandsController');
const router = require('express').Router();
const authentication = require('./authentication');

router.get('/', authentication.isAuthenticated, (req, res) => {
    res.render('islands');
    }
);

router.post('/', islandsController.islands);


module.exports = router;
