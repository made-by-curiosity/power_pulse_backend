const SuccessSavingProductInDiary = {
  type: "object",
  properties: {
    _id: { type: "Schema.Types.ObjectId" },
    productId: { type: "Schema.Types.ObjectId" },
    amount: { type: "integer" },
    calories: { type: "integer" },
    owner: { type: "Schema.Types.ObjectId" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
  },
  example: {
    _id: "650f0d5d7af99d232d2fda10",
    productId: "5d51694902b2373622ff5b7f",
    amount: 200,
    calories: 224,
    owner: "650acee0e83f22598b0222c1",
    createdAt: "2023-09-23T16:07:57.552Z",
    updatedAt: "2023-09-23T16:07:57.552Z",
  },
};

module.exports = SuccessSavingProductInDiary;