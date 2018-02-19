const mongoose = require('mongoose');
const { Schema } = mongoose;

const PAGE_SIZE = 5;

const Post = new Schema({
      title: String,
      body: String,
      tags: [String],
      createAt: {
            type:Date,
            default: Date.now
      }
});

Post.statics.createPost = function({title, body, tags}){
      const post = new this({
            title,
            body,
            tags
      });
      return post.save();
}

Post.statics.editPost = function({id, title, body, tags}){
      return this.update(
            {_id : id},
            {title,body,tags}
      ).exec();
}

Post.statics.findById = function(id){
      return this.findOne({_id : id}).exec();
}

Post.statics.findPosts = function({tag, page}){
      return this
            .find(tag ? {tags: tag} : {})
            .sort({"createAt": -1})
            .skip((page-1)*PAGE_SIZE)
            .limit(PAGE_SIZE)
            .lean()
            .exec();
}

Post.statics.getLastPage = async function(tag){
      let totalSize = await this.count(tag ? {tags: tag} : {}).exec() ;
      return  Math.ceil(totalSize/PAGE_SIZE);
}

Post.statics.deletePost = function(id){
      return this.remove({
            _id: id
      }).exec();
}
module.exports = mongoose.model('Post', Post);