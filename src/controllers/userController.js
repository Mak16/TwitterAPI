let users=[
    {
      "id": 1,
      "name": "Aime Nzolo",
      "username": "aimenzolo",
      "email": "aime@kadea.co",
      "profil": "https://pbs.twimg.com/profile_images/1136589142035521536/6Y2g5se__400x400.png",
      "thumbnailProfil": "https://pbs.twimg.com/profile_images/1136589142035521536/6Y2g5se__400x400.png",
      "Joined": "Joined October 2011"
    },
    {
      "id": 2,
      "name": "Vander Otis",
      "username": "VanderOtis",
      "email": "vander@kadea.co",
      "profil": "https://pbs.twimg.com/profile_images/488649894480318464/3L3wzEMB_400x400.jpeg",
      "thumbnailProfil": "https://pbs.twimg.com/profile_images/488649894480318464/3L3wzEMB_400x400.jpeg",
      "Joined": "Joined March 2014"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "profil": "https://via.placeholder.com/600/392537",
      "thumbnailProfil": "https://via.placeholder.com/150/392537",
      "Joined": "Joined March 2014"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "profil": "https://via.placeholder.com/600/392537",
      "thumbnailProfil": "https://via.placeholder.com/150/392537",
      "Joined": "Joined March 2014"
    }
]


function getAllUsers (req, res){
    res.send(users)
}
function getOneUser(req, res){
    const Id=req.params.id
    res.send(users.filter((e)=>{
      return e.id==Id
    }))
}
function deleteUser(req, res){
    const Id=parseInt(req.params.id)
        let index = users.findIndex(users=>users.id==Id)
        if(index==(-1)){
            return res.status(404).send('post pas trouvé')
        }
    users.splice(index,1)
    res.json(users)
}
function createUser(req, res){
    users.push(req.body)
    res.json(req.body)
}
function updateUser(req, res){
    const Id=parseInt(req.params.id)
    let index = users.findIndex(users=>users.id==Id)
    if(index==(-1)){
        return res.status(404).send('post pas trouvé')
    }
    users.splice(index, 1,req.body)
    res.json(users)
}
module.exports= {
    getAllUsers,getOneUser,deleteUser,createUser,updateUser,
}