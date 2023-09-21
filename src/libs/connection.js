const { dbusername, password } = process.env;
import mongoose from "mongoose";

const URI_STR = `mongodb://${dbusername}:${password}@ac-aspekdp-shard-00-00.67w104x.mongodb.net:27017,ac-aspekdp-shard-00-01.67w104x.mongodb.net:27017,ac-aspekdp-shard-00-02.67w104x.mongodb.net:27017/saqibportfolio?ssl=true&replicaSet=atlas-v3h06i-shard-0&authSource=admin&retryWrites=true&w=majority`;

let isConnected;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return true;
  }

  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(URI_STR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = mongoose.connections[0].readyState;
    console.log("Connected to MongoDB Atlas");
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw new Error("Could not connected to mongodb");
  }
};

export default connectDB;
