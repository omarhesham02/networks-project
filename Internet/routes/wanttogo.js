const wanttogoController = require('../controllers/wanttogoController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('wanttogo');
});

router.post('/', wanttogoController.wanttogo);



module.exports = router;