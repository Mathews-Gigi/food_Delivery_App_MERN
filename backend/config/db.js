import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://mathewsgigi25:MX2qLCZ0cwzGXODw@cluster0.8iefx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => console.log(`db connected succesfully`));
  } catch (error) {
    console.log(error)
  }
};
