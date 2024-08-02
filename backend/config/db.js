import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://poojasawant1156:Who123456@cluster0.o4qtlvb.mongodb.net/food-del').then(()=>console.log("DB connected"));
}

