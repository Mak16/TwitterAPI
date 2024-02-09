const { json } = require("express")

let tabs=[
    {id:1, name:'Makeda', user:'Makban16', password:'Makban@'},
    {id:2, name:'Eda', user:'Eda16', password:'Eda@'},
    {id:3, name:'Mak', user:'Mak16', password:'Mak@'},
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