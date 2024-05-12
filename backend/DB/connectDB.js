import mongoose from "mongoose"

const connectDB = async()=>{

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`\n MongoDb connection !! DB Host:${connectionInstance.connection.host} `)
    } catch (error) {
        console.log("Mongodb connection failed" ,error)
    }
}

export default connectDB;