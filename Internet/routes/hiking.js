const hikingController = require('../controllers/hikingController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('hiking');
});

router.post('/', hikingController.hiking);



module.exports = router;