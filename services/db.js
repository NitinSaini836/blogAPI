const mongoose = require('mongoose');
 module.exports.connexion=function()
 {
  
 mongoose.connect('
 
 .then(function()            
 {
   console.log("mongo is connected")
 })
 .catch(function(err)
 {
   console.log(err+"error ocuured")
 })
 }
 