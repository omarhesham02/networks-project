const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const users = db.collection("Users");

module.exports = { login };

async function login(req, res, next) {
    var user= req.body.username;
    var pass= req.body.password;
    
 var results= await db.collection('Users').find({"username": req.body.username, "password": req.body.password}).toArray();
if ((results.length == 0)){
      res.render('login', {message:'Your username or password is incorrect. Please Try again!'});
}

 else {
    res.render('home');
 }
    
}


