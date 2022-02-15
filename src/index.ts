import express from "express";
import userController from "./controllers/userController";

const app = express();

app.use(express.json());

app.use("/user", userController);

app.listen(5000, ()=>console.log("API is running at http://localhost:5000"));