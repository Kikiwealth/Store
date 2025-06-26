import mongoose from "mongoose";



 const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      // useUnifiedTopology: true,
    });
    console.log("mongodb connected successful");
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);// it means to exit code if there's an error (1) but (0) means success
  }
};


export default connectDB