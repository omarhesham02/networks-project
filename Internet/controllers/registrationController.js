const app = require('../app');
const MongoClient = app.MongoClient;
const db = new MongoClient(process.env.DB_URI).db("Users-DB");
const users = db.collection("Users");

async function registration(req, res, next) {
    //var results = users.find({ name : {$regex: new RegExp(req.body.username ,'i')} });
    //results = await results.toArray();
    //results.unshift({name: req.body.username});
    //if(results.length === 0){
        MongoClient.connect(process.env.DB_URI, { useUnifiedTopology: true })
    .then(() => {
        // console.log(`Connected to MongoDB at ${DB_URI}`);
        // app.use('Users');
        // const client = new MongoClient (DB_URI, { useUnifiedTopology: true });
        // var db= client.db('Users-DB');
        db.collection('Users').insertOne({username: req.body.username, password: req.body.password}); 
    })
    .catch(err => {

        console.log(err);
    });
   // }
    res.render('registration');
    
}

module.exports = { registration };