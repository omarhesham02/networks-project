const express = require('express');
const router = express.Router();

function register (req, res) {
   //extract the data from request body
   const name= request.body.name;
   const email= request.body.email;
   const password = request.password;
   let errors = []

   //validation
   if (!name || !email || !password || !password2) {
       errors.push({ message: 'All the fields must be filled to proceed' });
   }

   if (errors.length > 0) {
       response.render('register', { errors, name, email,  password, password2  });
   } else{
       //Check if the user exists
   }
};

module.exports = { register };