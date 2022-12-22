
const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const des = db.collection('destinations')

async function wanttogo(req, res, next) {
    console.log(req.body.destination);
    var results = des.find({ name : {$regex: new RegExp(req.body.destination ,'i')} });
    results = await results.toArray();
    console.log(results);
    if(results.length != 1){
        res.render('error');
    }
    else{
        var re =db.collection('Wishlist').find({username: req.session.username, dest : req.body.destination});
        re = await re.toArray();
        if(re.length < 1){
            await db.collection('Wishlist').insertOne({
                username: req.session.username,
                dest: req.body.destination,
            });
            res.render(req.body.destination, {mes:'Added to Want-to-Go List Succesfully'});
        }else{
            res.render(req.body.destination, {mes:'Already added to Want-to-Go List'});
            
        }
    }
}

module.exports = { wanttogo };