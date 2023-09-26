const InfoAboutCompletedWorkouts = {
  type: "array of objects",
  properties: {
    _id: { type: "Schema.Types.ObjectId" },
    exerciseId: {
      _id: { type: "Schema.Types.ObjectId" },
      bodyPart: { type: "string" },
      equipment: { type: "string" },
      gifUrl: { type: "string" },
      name: { type: "string" },
      target: { type: "string" },
      burnedCalories: { type: "integer" },
      time: { type: "integer" },
    },
    time: { type: "integer" },
    calories: { type: "integer" },
  },
  example: [
    {
      _id: "650b1086b6449a9b91ca9df7",
      exerciseId: {
        _id: "65089cba822834622223fd91",
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl:
          "https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif",
        name: "45° side bend",
        target: "abs",
        burnedCalories: 323,
        time: 3,
      },
      time: 5,
      calories: 650,
    },
  ],
};

module.exports = InfoAboutCompletedWorkouts;