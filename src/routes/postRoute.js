const express = require("express");
const { getOne, deletePost, postTweet, updatePost, getAllPosts } = require("../controllers/postController");
const router = express.Router();


router.get("",getAllPosts);
router.get("/:id",getOne);
router.delete('/:id', deletePost);
router.post('', postTweet);
router.put('/:id',updatePost);

module.exports = router;