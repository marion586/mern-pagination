const mongoose =  require('mongoose')


const connectDB =  async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            // useFindAndModify:true,
            // useUnifieldTopology:true,
            // useCreateIndex:true
        })

        console.log('Mongodb Connection success')
   
    } catch (error) {
        console.log('Mongodb Connection failed ')
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB