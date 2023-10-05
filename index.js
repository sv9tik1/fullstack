const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const posts = [];

// GET route
app.get('/posts', (req, res) => {
  res.send(posts);
});

// POST route
app.post('/posts', (req, res) => {
  const post = req.body;
  posts.push(post);
  res.send('Post added successfully qwe');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5555,()=>{
    console.log("rabotaet"+5555)
})