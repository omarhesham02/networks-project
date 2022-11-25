const islandsCtrl = require('../controllers/islandsCtrl');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('islands');
});

router.post('/', islandsCtrl.islands);



module.exports = router;
