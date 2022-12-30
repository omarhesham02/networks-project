const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const users = db.collection("Users");

module.exports = { login };

async function login(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var results= await db.collection('Users').find({"username": username, "password": password}).toArray();
    if ((results.length == 0)){
          res.render('login', {message:'Your username or password is incorrect. Please Try again!'});
    }
    else {
        // Authenticate user
        const user = { username: username, password: password};
        req.session.authenticated = true;
        req.session.username = username;
        req.session.password = password;
        res.render('home');
    }
}


