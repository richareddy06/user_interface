const express = require("express");
const Post = require('../models/post'); //accesses functions in user model file
const router = express.Router();

router
  .post('/create', async (req, res) => {
    try {
      const post = await Post.create_post(req.body.userid, req.body.content);
      res.send({...post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/update/posts', async (req, res) => {
    try {
      console.log("Recevived the req")
      const post = await Post.update_post(req.body.postid, req.body.content);
      res.send({...post});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update/likes', async (req, res) => {
    try {
      const post = await Post.update_likes(req.body.postid);
      res.send({...post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Post.delete_post(req.body.postid);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/posts', async (req, res) => {
    try {
      const posts = await Post.get_posts(req.body.userid);
      console.log("posts", posts)
      res.send({result:posts,success:true});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = router;