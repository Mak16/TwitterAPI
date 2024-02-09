const express = require("express");
const { getAll, getOne, deletePost, postTweet, updatePost } = require("../controllers/postController");
const router = express.Router();


router.get("",getAll);
router.get("/:id",getOne);
router.delete('/:id', deletePost);
router.post('', postTweet);
router.put('/:id',updatePost);

module.exports = router;