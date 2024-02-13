const { json } = require("express")

let tabs=[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952",
      "like": 9122,
      "repost": 10
    },
    {
      "userId": 2,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      "like": 122,
      "repost": 2
    },
    {
      "userId": 2,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776",
      "like": 22,
      "repost": 6
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
      "like": 912,
      "repost": 30
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2",
      "like": 822,
      "repost": 12
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      "like": 10,
      "repost": 0
    },
    {
      "userId": 2,
      "id": 7,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      "url": "https://via.placeholder.com/600/66b7d2",
      "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
      "userId": 2,
      "id": 8,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }
  ]
function getAll (req, res){
    res.send(tabs)
}
function getOne(req, res){
    const Id=req.params.id
    res.send(tabs.filter((e)=>{
      return e.id==Id
    }))
}
function deletePost(req, res){
    const Id=parseInt(req.params.id)
        let index = tabs.findIndex(tabs=>tabs.id==Id)
        if(index==(-1)){
            return res.status(404).send('post pas trouvé')
        }
    tabs.splice(index,1)
    res.json(tabs)
}
function postTweet(req, res){
    tabs.push(req.body)
    // res.send("Tweet posté avec succès")
    res.json(req.body)
}
function updatePost(req, res){
    const Id=parseInt(req.params.id)
    let index = tabs.findIndex(tabs=>tabs.id==Id)
    if(index==(-1)){
        return res.status(404).send('post pas trouvé')
    }
    tabs.splice(index, 1,req.body)
    res.json(tabs)
}
// function updateFildPost(req, res){
//     const Id=parseInt(req.params.id)
//     let index = tabs.findIndex(tabs=>tabs.id==Id)
//     if(index==(-1)){
//         return res.status(404).send('post pas trouvé')
//     }

//     tabs.splice(index, 1,req.body)
//     res.json(tabs)
// }
module.exports= {
    getAll,getOne,deletePost,postTweet,updatePost,
}