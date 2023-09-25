const ByBlodType = {
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
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
    _id: "5d51694902b2373622ff5b7f",
    weight: 100,
    calories: 112,
    category: "fish",
    title: "marlin",
  },
};

module.exports = ByBlodType;
