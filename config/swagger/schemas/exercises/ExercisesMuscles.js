const ExercisesMuscles = {
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
    _id: "65089d5082283462222402e6",
    filter: "Muscles",
    name: "abductors",
    imgURL:
      "https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469569/categories/abductors_ymfukx.jpg",
  },
};

module.exports = ExercisesMuscles;