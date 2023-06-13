// 1. import mongoose
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// 2. create schema for entity
const postSchema = new mongoose.Schema({
  userid: { type: String, required: true},
  content:String,
  likes: Number
})

// 3. create model of schema
const Post = mongoose.model("Posts", postSchema);

// 4. create CRUD functions on model
//CREATE a user
async function create_post(userid, content) {
//   const user = await getUser(userid);
  const newPost = await Post.create({
    userid:userid,
    content:content,
    likes:0
  });

  return newPost._doc;
}

// READ a user
async function get_posts(userid) {
  const post = await getPosts(userid);
  console.log(post)
  return post;
}

// UPDATE
async function update_post(postid, content) {
  const post = await Post.updateOne({"_id": postid}, {$set: { content: content}});
  return post;
}
async function update_likes(postid) {
  const post = await getPost(postid);
  console.log("post from db",post)
    const posts = await Post.updateOne({"_id": postid}, {$set: { likes: post.likes+1}});
    return posts;
  }
  
//DELETE
async function delete_post(postid) {
  await Post.deleteOne({"_id": postid});
};


async function getPosts(userid) {
    return await Post.find({ "userid": userid});
  }

async function getPost(postid) {
  return await Post.findOne({ "_id": postid});
}

  
// 5. export all functions we want to access in route files
module.exports = { 
    create_post,get_posts,update_post,delete_post,update_likes 
};