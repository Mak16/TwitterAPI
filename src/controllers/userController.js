const jwt=require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client')
const prisma=new PrismaClient

const privateKey=`-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEA64haUFTb3jA5IAGk5di1ELgNVZb+WP6+OWCe0FfjsaaoM6nx
zQr+8yCyftzLIOLDdCdtwKOcGOPEA9vQptubzGM73Swa8cL9MFRgEx0DyNI5wzQl
UvokKgP4xO+vP+utvN8UkgmOak3FXo/tJj3WYuYITh9z5mHbddvLB/nDnPjcJ0hK
WN7stxVyFQd/ladkspF57EsSm7ENL4cKrAqp+iQdcADZ6m/1D6CR2G2G+8ftPdL5
bIK/7b61T1mubgKpjaLyCQ2aaSUL5c8jy/zKDWK0dQLmzGzucZRPtYxN6lmmezjU
QsFyPK4Fn7O74YYoDQ7dnzMLMlUaozS0Nw/ejQIDAQABAoIBAGCAyaBIZJ2w3HcE
tW+HTwi+oJgE+cm09nPD5s4udJiBVEF2zB/a9YLgTsIz7PZYcwTQcuOPJZH9IH8E
PYVgTYF81zZTr+aGof5/U64BIV/S4t/cKb7Jxq+AWRk3q3JhOho8vMzpJXTg0JFi
HySgCYsT/SslL/Og/K5Zk+J8r21MsICf+gv5Aa6JrXIQj2oRs/shZULgkLzgteMJ
Wj9MHwFq2ozbeRLuA5/OON8Ah7NJ2oRNvAJe8Sf3MKm6WHaaFuj5gRoEjdbZ6r6H
cWKBn+F2cSl3HZKj1pBJrrTAAj+12xzrLfijVRKGHH3e0fazNSKbvX32ydwP6SOw
bVYu5nECgYEA+2bFT06YZzLZwwv6oG80TDsLTfJXo17/Ubzio+zbNMhjJRgz9i0N
+Exb2UEW4M8bM0hyY1cxHHHlcCbiM+xgljMuiTJZyJhTjPw+0x9rjhFv1hVhXfDm
UULuBnEYqHq6N+3PZYiSBDvbDYkAnQipMGYVfCaUTab23UHjzby6Q9cCgYEA79dG
DboMbR1QH82KZdsfVOchy/zyN8Zsh28kGmT5Pv1qNp7ADs8zUu4w2KanxkkvUkmA
KLYRWPp92sp5NjxbDctoEnexRBLe0+kzHTYhK8kXuFqYM2FduMpttBkuSczmX8SI
fCcMVEhVvka32c7v2IRNFgYi4TYoYboAxNsoJDsCgYBURQ6+lsnfTdxQ1SMdxCjz
pJcVebaGvME41OfjqvGPr9wMAyDn1BJquK3RFVBl6wZjGlW9luyPbF5MSbxpS0LV
FjLzKj2OUAExsRweCNo0tQOX73LD2oxZkOXYovBxCTKCrORoVG8dnDLBRrs96DlO
T+nDw+rSXLVDVWLXA/wr4QKBgAxEXnjlQy1xil+WC7YZ9whIqhnc3iasJ3Dl5lrT
P0xRedVBWWFoh59+P1FVdM9XfuwehkeOyGRcq4M9R+XWQHH8LV6EcLSionMEQnEE
C75JksUDHTXDjR+eeu3zO8LakA3l53UyKhdFe903kL+7LdlNKwQtXCtYscgN02w+
KVdxAoGAZJVqDt29saXQ8WNVYrm6lALSpCJp0sVEpsh19Ufi8lS+JrL+O9bqQU/e
FyeckAyBi9JGHy2sk7T32V2PLD2t9DyYCDE6gvbk6WchPlHLfZ59rTT7EoENj9oV
nR1pUxux2N8lwq7xPdIpd66Cn52le21fufEsCRvov6Oww1vLmuk=
-----END RSA PRIVATE KEY-----`

const publicKey=`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA64haUFTb3jA5IAGk5di1
ELgNVZb+WP6+OWCe0FfjsaaoM6nxzQr+8yCyftzLIOLDdCdtwKOcGOPEA9vQptub
zGM73Swa8cL9MFRgEx0DyNI5wzQlUvokKgP4xO+vP+utvN8UkgmOak3FXo/tJj3W
YuYITh9z5mHbddvLB/nDnPjcJ0hKWN7stxVyFQd/ladkspF57EsSm7ENL4cKrAqp
+iQdcADZ6m/1D6CR2G2G+8ftPdL5bIK/7b61T1mubgKpjaLyCQ2aaSUL5c8jy/zK
DWK0dQLmzGzucZRPtYxN6lmmezjUQsFyPK4Fn7O74YYoDQ7dnzMLMlUaozS0Nw/e
jQIDAQAB
-----END PUBLIC KEY-----`



async function getAllUsers (req, res){
    const users = await prisma.user.findMany().then()
    res.json(users)
    
}

async function getOneUser(req, res){
    const Id=parseInt(req.params.id)
    const user = await prisma.user.findUnique({where: {id:Id}}).then()
    res.json(user)
    
}

async function deleteUser(req, res){
    const Id=parseInt(req.params.id)
    const user = await prisma.user.delete({where: {id:Id}}).then()
    res.status(200).send(`user ${Id} deleted successfully`)

}

async function createUser(req, res){
    const user = await prisma.user.create({data:{email:req.body.email,name:req.body.name}}).then()
    res.json(user)
}

async function updateUser(req, res){
    const Id=parseInt(req.params.id)
    const user = await prisma.user.update({where: {id:Id}, data:{email:req.body.email,name:req.body.name} }).then()
    res.json(user)
}

// function authentification(req, res) {
//     const{name,password}=req.body
//     const valid=users.some((user)=> user.name===name && user.password===password)
//     console.log(`name:${name}`)
//     console.log(`password : ${password}`)
//     const token=jwt.sign({name},privateKey,{algorithm : 'RS256'})
//     if(valid){
//         res.send(token)
//     }
//     else{
//         res.status(404).send('page not found')
//     }
// }

// function jwtGuard(req,res,next){
//     const idToken=req.headers.authorization;
//     console.log(idToken);
//     jwt.verify(idToken,publicKey,(err,decoded)=>{
//         if(err){
//         res.status(401).send("pas autorisé")
//         }else{
//             req.userToken=decoded;
//             next()
//         }
//     })
// }

// function validationPassword(req,res){

//     res.send(req.userToken)
  
// }


//authentification,validationPassword,jwtGuard
module.exports= {
    getAllUsers,getOneUser,deleteUser,createUser,updateUser,
}