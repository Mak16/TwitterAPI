const express = require('express');
const cors = require('cors');

const post = require('./src/routes/postRoute.js');
const routerUser = require('./src/routes/userRoute.js');
const { login } = require('./src/controllers/loginController.js');

const app = express();
const Port=9000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/tweets', post)
app.use('/users', routerUser)
app.use('/login', login)



app.listen(Port, ()=>{
  console.log(`le server est demmaré au Port ${Port}`);
})