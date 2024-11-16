import mongoose from "mongoose";

// MOdel db for food
const foodScahema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
// only to create model only one time

const foodModel = mongoose.model.food || mongoose.model("food", foodScahema);

export default foodModel;
