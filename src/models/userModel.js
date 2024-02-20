


// prisma.user.create({data:{email:"jameskabeya@gmail.com",name:"James"}}).then(console.log)
// prisma.user.findMany({where: {email:{startsWith:'f'}}}).then(console.log)
prisma.user.findUnique({where: {email:"jameskabeya@gmail.com"}}).then(console.log)
// prisma.user.update({where: {email:"jameskabeya@gmail.com"}, data:{name:"BroJames"} }).then(console.log)
prisma.user.updateMany({data:{name:"BroJames"} }).then(console.log)