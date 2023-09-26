const ExercisesBodyParts = {
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
    _id: "65089d5082283462222402c0",
    filter: "Body parts",
    name: "back",
    imgURL:
      "https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/back_wzzphw.jpg",
  },
};

module.exports = ExercisesBodyParts;