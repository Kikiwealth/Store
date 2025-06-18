import mongoose from "mongoose";



export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      // useUnifiedTopology: true,
    });
    console.log("mongodb connected successful");
  } catch (error) {
    console.log("Mongodb connection error", error);
  }
};
module.exports = connectDB;  