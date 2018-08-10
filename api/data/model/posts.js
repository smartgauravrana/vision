const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeSchema =  new mongoose.Schema({
    username: String
});

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    comment : {
        type : String,
        required : true
      },
    createdOn : {
        type : String,
        "default" : new Date().toDateString()
      },
    likes: [likeSchema]
});

const postSchema = new mongoose.Schema({
    postTitle: {
        type: String, 
        required: true
    },
    postContent: {
        type: String, 
        required: true
    },
    postDate: {
        type: String
    },
    postTags: {
        type: [String],
        required: true
    },
    comments: [commentSchema],
    author: {
        type: Schema.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    }	
});

module.exports = mongoose.model('Post', postSchema);