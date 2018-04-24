const log = console.log;
const db_url = process.env.MONGO_URI;
const col = process.env.COLLECTION;
const ID = process.env.ID;
const KEY = process.env.KEY;

const url = require('url');
const client = new (require('google-images'))(ID, KEY);
const {MongoClient} = require('mongodb');
const app = require('express')();


// MongoClient.connect(url, (err, client) => {
//   if (err) throw err;
//   client.close();
// });

app.listen(process.env.PORT || 3000);


app.get('/', (req, res) => res.end());
app.get('/history', (req, res) => res.end());


// app.get('/search/*', (req, res) => {
//   const query = url.parse(req.url).pathname.slice(1);
//   client.search(query, {page: req.query.offset || 1}).then(images => {
//     log(query);
//     res.json(images);
//   });
// });
