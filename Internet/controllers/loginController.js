const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const users = db.collection("Users");

module.exports = { login };

async function login(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    
   // MongoClient.connect(process.env.DB_URI, { useUnifiedTopology: true })
   //.then(() => {
    //if (req.body.username == "" || req.body.password == "") {
        //res.redirect('login');
        // or condition for error message to appear using a variable we do in views 
    
    //try count method 
    
    //add required 
    // MongoClient.connect(process.env.DB_URI, { useUnifiedTopology: true })
    //     .then(() => {
    //        if(db.collection('Users').count({username: req.body.username, password: req.body.password}))
    //       res.redirect('home'); 
    //        else {
    //       res.redirect('login');
        //   res.render('home')
      //   }
       // })
       // .catch(err => {
         //   console.log(err);
        //});

  //if(db.collection('Users').find({username: req.body.username, password: req.body.password})){
  //if ((db.collection('Users').count({"username": req.body.username, "password": req.body.password}))!= 0){
    //   res.render('home')
  //}

 var results= await db.collection('Users').find({"username": username, "password": password}).toArray();
//console.log(results.length);
//console.log(results);
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


