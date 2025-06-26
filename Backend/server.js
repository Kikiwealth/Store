import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/product.model.js";
import cors from "cors"

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json()); // allow JSON body parsing
app.use(cors());

console.log("Mongo URI:", process.env.MONGODB);

// Connect to database
connectDB();


// POST route to create product
app.post("/api/products", async (req, res) => {
  const product = req.body;
  
  

  if (!product.name || !product.image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating product:", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
