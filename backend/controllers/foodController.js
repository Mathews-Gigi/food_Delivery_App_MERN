import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from "fs";

//Api to add food items

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//  food list - to list All food

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({
      success: true,
      message: "fetch succesfull",
      total: foods.length,
      data: foods,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error , something went wrong" });
  }
};

// remove food item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "success" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
