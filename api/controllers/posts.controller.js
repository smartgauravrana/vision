var mongoose = require('mongoose');
var Post = require('../data/model/posts');

module.exports.postsAddOne = (req, res) => {
    console.log('Adding new post');
    Post
        .create({
            postTitle: req.body.title,
            postContent: req.body.content,
            postDate: new Date().toDateString(),
            postTags: fetchTags(req.body.tags),
            author: req.body.author
        }, (err, post) => {
            if (err) {
                console.log("Error creating post");
                res
                  .status(400)
                  .json(err);
              } else {
                console.log("Post created!", post);
                res
                  .status(201)
                  .json(post);
              }
        });

};

const fetchTags = (tagsString) => {
    return tags =  tagsString.split(",")
                                    .map(el => el.trim());
                            
}