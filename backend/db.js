const mongoose = require('mongoose')

const MongoURL = "mongodb+srv://tanishavats01:kUrhUSQndxqnEYz4@cluster0.uoyahbc.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(MongoURL).then((res) =>
        console.log("MongoDB connected successfuly")).
        catch((error) => 
        console.log("Error: ",error))
}