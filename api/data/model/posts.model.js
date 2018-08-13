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

postSchema.pre('remove', function(req, res, next) {
    console.log('post id middleware: ', req.params.postId);
    const User = mongoose.model('User');
    User.findByIdAndRemove(this.author, { $pullAll: {posts: [req.params.postId] } } )
    .then(() => next())
    .catch(err => console.log(err));
});

postSchema.post('save', function (next) {
    const User = mongoose.model('User');
    User.findByIdAndUpdate(this.author, {$push: {posts: this}})
    .then()
    .catch(err => console.log(err));
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;