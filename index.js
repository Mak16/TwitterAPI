const express = require('express')
const app = express()
const Port=3000;
let tabs=[
  {id:1, name:'Makeda', user:'Makban16', password:'Makban@'},
  {id:2, name:'Eda', user:'Eda16', password:'Eda@'},
  {id:3, name:'Mak', user:'Mak16', password:'Mak@'},
]
app.get('/', (req, res) => {
  res.send(tabs)
})
app.get('/tweet/:id', (req, res) => {
  const Id=req.params.id
  res.send(tabs.filter((e)=>{
    return e.id==Id
  }))
})
app.delete('/tweet/:id', (req, res) => {
  const Id=req.params.id
  res.send(tabs.filter((e)=>{
    return tabs.splice(Id-1, 1)
  }))
})

app.use(express.json())

app.post('/', (req, res) => {
  tabs.push(req.body)
  res.send("Tweet posté avec succès")
})
app.put('/tweet/:id', (req, res) => {
  const Id=req.params.id
  res.send(tabs.filter((e)=>{
    return tabs.splice(Id-1, 1,req.body)
  }))
})
app.listen(Port, ()=>{
  console.log(`le server est demmaré au Port ${Port}`);
})