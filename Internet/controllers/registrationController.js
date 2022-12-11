const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const users = db.collection("Users");

async function registration(req, res, next) {
    if (req.body.username == "" || req.body.password == "") {
        res.render('registrationerror');
    } else {
        MongoClient.connect(process.env.DB_URI, { useUnifiedTopology: true })
        .then(() => {
            db.collection('Users').insertOne({username: req.body.username, password: req.body.password}); 
        })
        .catch(err => {
            console.log(err);
        });
        res.render('login2')
    }
    res.render('registration'); 
}

module.exports = { registration };