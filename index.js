const express = require('express');
const post = require('./src/routes/postRoute.js');
const app = express();
const jwt=require('jsonwebtoken');
const routerUser = require('./src/routes/userRoute.js');
const Port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/tweet', post)
app.use('/user', routerUser)



app.listen(Port, ()=>{
  console.log(`le server est demmaré au Port ${Port}`);
})