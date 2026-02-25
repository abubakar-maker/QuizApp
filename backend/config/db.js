import mongoose from "mongoose";
export const connetDB = async () => {
    await mongoose.connect('mongodb+srv://abubakaar9913_db_user:quizapp000@cluster0.lz4bbrh.mongodb.net/QuizApp')
    .then(()=> {
        console.log("DB conneted");
        
    })
}