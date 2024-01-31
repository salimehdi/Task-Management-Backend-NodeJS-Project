import express from "express";
const fetchRouter = express.Router();
import {create , allTask , completed , edit , deleteTask , category} from "../controller/fetchController.js";

fetchRouter.post("/create", create);
fetchRouter.get("/allTask", allTask);
fetchRouter.patch("/completed/:id" , completed);
fetchRouter.patch("/edit" , edit);
fetchRouter.delete("/deleteTask" , deleteTask);
fetchRouter.get("/category" , category); 

export default fetchRouter;