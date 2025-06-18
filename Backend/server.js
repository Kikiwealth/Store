import express from "express";
import dotenv from "dotenv";
 dotenv.config();

const app = express();

console.log(process.env.MONGODB)

// app.get("/", (req,res) => {
//     res.send("data product");
// })

//  importing from .env 
const port = process.env.PORT || 4000


app.listen(port, () => 
    console.log(`Server started running on http://localhost:${port} `)
)