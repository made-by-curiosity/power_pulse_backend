const Category = {
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
    _id: "65089d2582283462222402be",
    productsCategories: [
      "alcoholic drinks",
      "berries",
      "cereals",
      "dairy",
      "dried fruits",
      "eggs",
      "fish",
      "flour",
      "fruits",
      "meat",
      "mushrooms",
      "nuts",
      "oils and fats",
      "poppy",
      "sausage",
      "seeds",
      "sesame",
      "soft drinks",
      "vegetables and herbs",
    ],
  },
};

module.exports = Category;