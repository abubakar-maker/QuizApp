import mongoose from "mongoose";
export const connetDB = async () => {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://abubakaar9913_db_user:quizapp000@cluster0.lz4bbrh.mongodb.net/QuizApp';
    await mongoose.connect(mongoURI)
    .then(()=> {
        console.log("DB conneted");
        
    })
    .catch((err) => {
        console.log("DB connection error:", err);
    })
}