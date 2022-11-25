const islandsController = require('../controllers/islandsController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('islands');
});

router.post('/', islandsController.islands);



module.exports = router;
