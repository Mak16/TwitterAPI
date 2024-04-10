const { PrismaClient } = require('@prisma/client')
const prisma=new PrismaClient

async function login (req, res){
    const Email=req.body.email
    const Password=req.body.password
    const user = await prisma.user.findUnique({where: {email:Email} }).then(user=>{
        if(user){
            if(password===Password){
                res.json("Success")
            } else {
                res.json('password incorrect')
            }
        }
        else{
            res.json('No user found')
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    res.json(user)
    
}
module.exports={
    login
}