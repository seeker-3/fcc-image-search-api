const log = console.log;
const url = process.env.MONGO_URI;
const col = process.env.COLLECTION;


const GoogleSearch = require('google-search');
const client = new GoogleSearch({
  key: process.env.CSE_API_KEY,
  cx: process.env.CSE_ID,
});
const {MongoClient} = require('mongodb');
const express = require('express')
const app = express()


app.listen(process.env.PORT || 3000);
//app.use(express.static('public'))

// client.build({
//   q: "cats",
//   start: 5,
//   fileType: "pdf",
//   gl: "tr", //geolocation, 
//   lr: "lang_tr",
//   num: 10, // Number of search results to return between 1 and 10, inclusive 
//   siteSearch: "http://kitaplar.ankara.edu.tr/" // Restricts results to URLs from a specified site 
// }, function(error, response) {
//   console.log(response);
// });




// MongoClient.connect(url, (err, client) => {
//   if (err) throw err;
//   client.close();
// });
