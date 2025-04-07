require('dotenv').config()
console.log(process.env.MONGO_URI)
const fs =  require('fs')

const Post = require('../models/Post')

const connectDB = require('../config/db')

connectDB()

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json` , 'utf-8'))


const importData = async ()=> {
    try {
        await Post.create(posts)
        console.log('Data successfully imported')
        process.exit()
    } catch (error) {
        console.log("Error", error)
        process.exit(1)
    }
}

const deleteData = async ()=> {
    try {
        await Post.deleteMany({});
        console.log("Data succefully deleted")
        process.exit()
    } catch (error) {
        console.log('there was an erro'  , error)
    }
}

if(process.argv[2] === "--import"){
    importData()
}

else if(process.argv[2]== "--delete") {
    deleteData()
}