const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
var alert = require('alert');

async function registration(req, res, next) {
    var results= await db.collection('Users').find({"username": req.body.username}).toArray();
    if ((results.length != 0)){
        res.render('registration', {message:'This username is already taken!'});
    } else {
        MongoClient.connect(process.env.DB_URI, { useUnifiedTopology: true })
        .then(() => {
            db.collection('Users').insertOne({username: req.body.username, password: req.body.password}); 
        })
        .catch(err => {
            console.log(err);
        });
        alert('You have registered successfully!');
        res.redirect('/');
        res.render('login');
    }
}

module.exports = { registration };