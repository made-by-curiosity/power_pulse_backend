const SavingConsumedProduct = {
  type: "object",
  properties: {
    productId: { type: "Schema.Types.ObjectId" },
    amount: { type: "integer", min: 1 },
    calories: { type: "integer", min: 1 },
  },
  required: ["productId", "amount", "calories"],
  example: {
    productId: "5d51694902b2373622ff5b7f",
    amount: 200,
    calories: 224,
  },
};

module.exports = SavingConsumedProduct;