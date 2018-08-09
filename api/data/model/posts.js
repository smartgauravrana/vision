const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
        type: String, 
        required: true
    },
    postTags: {
        type: [String],
        required: true
    },
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