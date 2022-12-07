
const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const dest = db.collection("destinations");

async function searchresults(req, res, next) {
    var results = dest.find({ name : {$regex: new RegExp(req.body.Search ,'i')} });
    results = await results.toArray();
    //console.log(results);
    results.unshift({name: req.body.Search});
    res.render('searchresults', {results : results});
    
}

module.exports = { searchresults };