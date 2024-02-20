const express = require('express');
const post = require('./src/routes/postRoute.js');
const app = express();


const jwt=require('jsonwebtoken')
const routerUser = require('./src/routes/userRoute.js')
const Port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/tweet', post)
app.use('/user', routerUser)

// prisma.user.create({data:{email:"jameskabeya@gmail.com",name:"James"}}).then(console.log)
// prisma.user.findMany({where: {email:{startsWith:'f'}}}).then(console.log)
// prisma.user.findUnique({where: {email:"jameskabeya@gmail.com"}}).then(console.log)
// prisma.user.update({where: {email:"jameskabeya@gmail.com"}, data:{name:"BroJames"} }).then(console.log)
// prisma.user.updateMany({data:{name:"BroJames"} }).then(console.log)



app.listen(Port, ()=>{
  console.log(`le server est demmaré au Port ${Port}`);
})