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
        let post =tabs.map((tab)=> (tabs.indexOf(tab.id)==Id))
        return tabs.splice(post,1)
}
function postTweet(req, res){
    tabs.push(req.body)
    res.send("Tweet posté avec succès")
}

    
module.exports= {
    getAll,getOne,deletePost,postTweet
}