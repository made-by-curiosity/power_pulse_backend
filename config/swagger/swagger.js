const {
  auth,
  users,
  diary,
  productCategory,
  exercises,
  statistics,
} = require("./schemas");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Power Pulse API",
      description: "",
      contact: {
        name: "",
      },
      consumes: ["application/json"],
      produces: ["application/json"],
      servers: ["https://power-pulse.onrender.com"],
      // servers: ["https://localhost:3030"],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        // Auth
        RegisterInput: auth.RegisterInput,
        RegisterResponse: auth.RegisterResponse,
        LoginInput: auth.LoginInput,
        LoginResponse: auth.LoginResponse,
        // Users
        UpdateUserParams: users.UpdateUserParams,
        UpdateParamsResponse: users.UpdateParamsResponse,
        UpdateAvatarResponse: users.UpdateAvatarResponse,
        UpdateUsernameInput: users.UpdateUsernameInput,
        UpdateUsernameResponse: users.UpdateUsernameResponse,
        GetParams: users.GetParams,
        // Diary
        InfoAboutConsumedProducts: diary.InfoAboutConsumedProducts,
        InfoAboutCompletedWorkouts: diary.InfoAboutCompletedWorkouts,
        SavingConsumedProduct: diary.SavingConsumedProduct,
        SuccessSavingProductInDiary: diary.SuccessSavingProductInDiary,
        SavingCompletedWorkout: diary.SavingCompletedWorkout,
        // ProductCategory
        Category: productCategory.Category,
        ByBlodType: productCategory.ByBlodType,
        // Exercises
        ExercisesCategories: exercises.ExercisesCategories,
        ExercisesBodyParts: exercises.ExercisesBodyParts,
        ExercisesEquipment: exercises.ExercisesEquipment,
        ExercisesMuscles: exercises.ExercisesMuscles,
        SuccessSavingWorkoutInDiary: exercises.SuccessSavingWorkoutInDiary,
        ErrorSavingInDiary: exercises.ErrorSavingInDiary,
        SuccessDeletingProductFromDiary:
          exercises.SuccessDeletingProductFromDiary,
        SuccessDeletingWorkoutFromDiary:
          exercises.SuccessDeletingWorkoutFromDiary,
        Error400DeletingFromDiary: exercises.Error400DeletingFromDiary,
        Error404DeletingFromDiary: exercises.Error404DeletingFromDiary,
        // Statistics
        TotalUsers: statistics.TotalUsers,
        TotalExercises: statistics.TotalExercises,
        TotalWorkouts: statistics.TotalWorkouts,
        TotalWorkoutsTime: statistics.TotalWorkoutsTime,
        TotalBurnedCalories: statistics.TotalBurnedCalories,
      },
    },
  },
  apis: ["./routes/api/*.js"],
  tags: [
    { name: "Auth", description: "Authentication" },
    { name: "Users", description: "Operations related to users" },
    { name: "Diary", description: "Operations related to diary" },
    { name: "Products", description: "Operations related to products" },
    { name: "Exercise", description: "Operations related to exercises" },
    { name: "Statistics", description: "Statistics" },
  ],
};

module.exports = swaggerOptions;
