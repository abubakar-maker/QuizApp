import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    technology: {
      type: String,
      required: true,
      trim: true,
      // ❌ REMOVED enum: ["unit1", "unit2", "unit3", "unit4"]
      // This allows "unit1", "math", "react", etc. without crashing
    },
    level: {
      type: String,
      required: true,
      // Keeping this enum is fine as long as you always send "basic", "intermediate", or "advanced"
      enum: ["basic", "intermediate", "advanced"],
    },
    totalQuestions: { type: Number, required: true },
    correct: { type: Number, required: true },
    wrong: { type: Number, required: true },
    score: { type: Number, default: 0 },
    performance: {
      type: String,
      enum: ["Excellent", "Good", "Average", "Needs Work"],
      default: "Needs Work",
    },
  },
  { timestamps: true }
);

// ✅ Improved Pre-save hook
ResultSchema.pre("save", function (next) {
  const total = Number(this.totalQuestions) || 0;
  const correct = Number(this.correct) || 0;

  // Calculate score
  this.score = total ? Math.min(100, Math.round((correct / total) * 100)) : 0;

  // Set performance based on score
  if (this.score >= 85) this.performance = "Excellent";
  else if (this.score >= 65) this.performance = "Good";
  else if (this.score >= 45) this.performance = "Average";
  else this.performance = "Needs Work";

  // Ensure wrong is a number
  if (this.wrong === undefined || this.wrong === null) {
    this.wrong = Math.max(0, total - correct);
  }
});

const Result = mongoose.models.Result || mongoose.model("Result", ResultSchema);

export default Result;