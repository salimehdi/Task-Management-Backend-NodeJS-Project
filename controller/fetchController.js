import mongoose from "mongoose";
import taskModel from "../model/taskSchema.js";

export const create = async (req, res) => { 
  const {title , description , dueDate , category } = req.body;
  try {
    const newTask = new taskModel({
      title: title,
      description: description,
      dueDate: dueDate,
      category: category,
      status: "pending",
    });
    const result = await newTask.save();
    return res.status(200).json({
        success: true,
        data: result
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const allTask = async (req, res) => {
  try {
    const task = await taskModel.find();
    return res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
 
export const completed = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  id = new mongoose.Types.ObjectId(id);
  try {
    const check = await taskModel.findOne({ _id: id });
    if (!check.status) {
    const task = await taskModel.updateOne({ _id: id }, { $set: { status: "completed" } });
    
    return res.status(200).json({
      success: true,
      error: "Task set completed",
    });

    } else {

      return res.status(400).json({
        success: false,
        error: "Task already completed",
      });

    }
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Error updating task",
    });
  }
};


export const edit = async (req, res) => { 
  const {title , description , category , id ,} = req.query;
  try {
    const task = await taskModel.updateOne({ _id: id }, { $set: { 
      title: title,
      description: description,
      category: category,
    } });
    
    return res.status(200).json({
      success: true,
      error: "Task editted",
    });
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Error updating task",
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.query;
  try {
    const task = await taskModel.deleteOne({ _id: id });
    if(task.deletedCount === 0) {
      return res.status(400).json({
        success: false,
        error: "Task not found",
      });
    }
    return res.status(200).json({
      success: true,
      error: "Task deleted",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Error deleting task",
    });
  }
};

export const category = async (req, res) => {
  let { category } = req.query;
  category = category.toLowerCase();
  try {
    const task = await taskModel.find({ category: category});
    return res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

