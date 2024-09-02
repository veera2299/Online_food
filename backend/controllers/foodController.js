import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add food item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    const { name, description, price, category } = req.body;

    const food = new foodModel({
        name, description, price, category, image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

//all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}
//remove fooditem 
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "failed to remove food" })

    }
}

export { addFood, listFood, removeFood }