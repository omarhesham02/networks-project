
const wanttogoController = require('../controllers/wanttogoController');
const router = require('express').Router();
const app = require('../app');
const authentication = require('./authentication');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const wish = db.collection('Wishlist');

router.get('/', authentication.isAuthenticated, async (req, res) => {
    var results = wish.find({ username : req.session.username });
    results = await results.toArray();
    res.render('wanttogo', {list : results});
});

router.post('/', wanttogoController.wanttogo);



module.exports = router;