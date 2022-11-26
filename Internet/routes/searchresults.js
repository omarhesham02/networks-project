const searchresultsController = require('../controllers/searchresultsController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('searchresults');
});

router.post('/', searchresultsController.searchresults);



module.exports = router;