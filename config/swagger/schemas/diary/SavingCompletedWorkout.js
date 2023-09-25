const SavingCompletedWorkout = {
  type: "object",
  properties: {
    exerciseId: { type: "Schema.Types.ObjectId" },
    time: { type: "integer", min: 1 },
    calories: { type: "integer", min: 1 },
  },
  required: ["productId", "time", "calories"],
  example: {
    exerciseId: "65089cba822834622223fd91",
    time: 6,
    calories: 646,
  },
};

module.exports = SavingCompletedWorkout;