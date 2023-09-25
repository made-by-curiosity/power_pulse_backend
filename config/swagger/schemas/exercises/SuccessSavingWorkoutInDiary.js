const SuccessSavingWorkoutInDiary = {
  type: "object",
  properties: {
    _id: { type: "Schema.Types.ObjectId" },
    exerciseId: { type: "Schema.Types.ObjectId" },
    time: { type: "integer" },
    calories: { type: "integer" },
    owner: { type: "Schema.Types.ObjectId" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
  },
  example: {
    _id: "650b155e633ef9c0f6487fdb",
    exerciseId: "65089cba822834622223fd91",
    time: 6,
    calories: 646,
    owner: "650acee0e83f22598b0222c1",
    createdAt: "2023-09-23T16:07:57.552Z",
    updatedAt: "2023-09-23T16:07:57.552Z",
  },
};

module.exports = SuccessSavingWorkoutInDiary;