const InfoAboutConsumedProducts = {
  type: "array of objects",
  properties: {
    _id: { type: "Schema.Types.ObjectId" },
    productId: {
      groupBloodNotAllowed: {
        1: { type: "boolean" },
        2: { type: "boolean" },
        3: { type: "boolean" },
        4: { type: "boolean" },
      },
      _id: { type: "Schema.Types.ObjectId" },
      weight: { type: "integer" },
      calories: { type: "integer" },
      category: { type: "string" },
      title: { type: "string" },
    },
    amount: { type: "integer" },
    calories: { type: "integer" },
  },
  example: [
    {
      _id: "650dd80eb4c86ec486da4798",
      productId: {
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
      amount: 200,
      calories: 224,
    },
  ],
};

module.exports = InfoAboutConsumedProducts;
