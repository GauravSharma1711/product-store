import mongoose from "mongoose";

const connectDB = async (req,res) => {

    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected",res.connection.host);
     } catch (error) {
         console.error("MongoDB Connection Error:", error.message);
         process.exit(1);
    }
}

export default connectDB;