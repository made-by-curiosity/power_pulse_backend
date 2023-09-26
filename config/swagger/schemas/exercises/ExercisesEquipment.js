const ExercisesEquipment = {
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
    _id: "65089d5082283462222402ca",
    filter: "Equipment",
    name: "assisted",
    imgURL:
      "https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/assisted_gukduh.jpg",
  },
};

module.exports = ExercisesEquipment;