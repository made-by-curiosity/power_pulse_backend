const ExercisesCategories = {
  type: "object",
  properties: {
    _id: { type: "string" },
    productsCategories: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: ["_id", "productsCategories"],
  example: {
    _id: "65089cba822834622223fd90",
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl:
      "https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif",
    name: "3/4 sit-up",
    target: "abs",
    burnedCalories: 220,
    time: 3,
  },
};

module.exports = ExercisesCategories;