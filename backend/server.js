import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
// app configuration

const app = express();
const port = 4000;

//middle ware

app.use(express.json());
app.use(cors());

// db connection

connectDb();

//  api end-points

app.use("/api/food/", foodRouter);
// connected to the upload file to  list images

app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello world , sucess");
});
app.listen(port, () => {
  console.log(`Hello world , server is running at http://lochalhost:${port}`);
});

//mongodb+srv://mathewsgigi25:<db_password>@cluster0.8iefx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
