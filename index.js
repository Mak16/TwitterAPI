const express = require('express');
const { getAll, getOne, deletePost, postTweet } = require('./src/controllers/postController');
const app = express()
const Port=3000;

app.get('/', getAll)
app.get('/tweet/:id', getOne)
app.delete('/tweet/:id', deletePost)

app.use(express.json())
app.post('/', postTweet)
app.put('/tweet/:id', (req, res) => {
  const Id=parseInt(req.params.id)
  res.send(tabs.filter((e)=>{
    return tabs.splice(Id-1, 1,req.body)
  }))
})
app.listen(Port, ()=>{
  console.log(`le server est demmaré au Port ${Port}`);
})