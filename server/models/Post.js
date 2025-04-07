const mongoose =  require("mongoose")

const postSchema =  new mongoose.Schema({
    title : {
        type : String,
        require: [true , "Please provide a title"]
    },
    author : {
        type : String,
        require: [true , "Please provide a author"]
    },
    body : {
        type : String,
        require: [true , "Please provide a body"]
    }
})

const Post = mongoose.model("Post" , postSchema)

module.exports = Post