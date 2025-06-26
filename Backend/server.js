import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
 import productRoutes from "./routes/product.route.js"
import cors from "cors"


dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json()); // allow JSON body parsing
app.use("/api/products", productRoutes);
app.use(cors());

console.log("Mongo URI:", process.env.MONGODB);

// Connect to database
connectDB();





app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
