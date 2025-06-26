import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

const router = express.Router();

//Get all data from database
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching product", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
});

//Update products
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  //console.log ("id:", id)

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("error Updating product", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
});

// POST route to create product
router.post("/", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
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

//Delete a data from database
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id:", id);

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("error in deleting  product", error.message);
    res.status(500).json({ success: false, message: "Product not found" });
  }
});

export default router;
