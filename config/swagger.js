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
			// servers: ["https://localhost:3000"],
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
// Auth, Users
        RegisterInput: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
          required: ["name", "email", "password"],
          example: {
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
          },
        },
        RegisterResponse: {
          type: "object",
          properties: {
            token: { type: "string" },
            user: {
              type: "object",
              properties: {
                name: { type: "string" },
                email: { type: "string", format: "email" },
              },
            },
          },
          example: {
            token: "your-auth-token",
            user: {
              name: "John Doe",
              email: "john@example.com",
            },
          },
        },
        LoginInput: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
          required: ["email", "password"],
          example: {
            email: "john@example.com",
            password: "password123",
          },
        },
        UpdateUserParams: {
          type: "object",
          properties: {
            height: { type: "number", minimum: 150 },
            currentWeight: { type: "number", minimum: 35 },
            desiredWeight: { type: "number", minimum: 35 },
            birthday: {
              type: "string",
              format: "date",
            },
            blood: { type: "number", enum: [1, 2, 3, 4] },
            sex: { type: "string", enum: ["male", "female"] },
            levelActivity: { type: "number", enum: [1, 2, 3, 4, 5] },
          },
          required: [
            "height",
            "currentWeight",
            "desiredWeight",
            "birthday",
            "blood",
            "sex",
            "levelActivity",
          ],
          example: {
            height: 170,
            currentWeight: 75,
            desiredWeight: 70,
            birthday: "1990-01-01",
            blood: 1,
            sex: "male",
            levelActivity: 3,
          },
        },
        UpdateUsernameInput: {
          type: "object",
          properties: {
            name: { type: "string" },
          },
          required: ["name"],
          example: {
            name: "New Name",
          },
				},
// Diary
				InfoAboutConsumedProducts: {
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
									4: false
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
				},
				InfoAboutCompletedWorkouts: {
					type: "array of objects",
					properties: {
						_id: { type: "Schema.Types.ObjectId" },
						exerciseId: {
							_id: { type: "Schema.Types.ObjectId" },
							bodyPart: { type: "string" },
							equipment: { type: "string" },
							gifUrl: { type: "string" },
							name: { type: "string" },
							target: { type: "string" },
							burnedCalories: { type: "integer" },
							time: { type: "integer" },
						},
						time: { type: "integer" },
						calories: { type: "integer" },
					},
					example: [
						{
							_id: "650b1086b6449a9b91ca9df7",
							exerciseId: {
								_id: "65089cba822834622223fd91",
								bodyPart: "waist",
								equipment: "body weight",
								gifUrl: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif",
								name: "45° side bend",
								target: "abs",
								burnedCalories: 323,
								time: 3,
							},
							time: 5,
							calories: 650,
						},
					],
				},
				SavingConsumedProduct: {
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
				},
				SuccessSavingProductInDiary: {
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
						updatedAt: "2023-09-23T16:07:57.552Z"
					},
				},
				SavingCompletedWorkout: {
          type: "object",
          properties: {
            exerciseId: { type: "Schema.Types.ObjectId" },
            time: { type: "integer", min: 1 },
						calories: { type: "integer", min: 1 },
          },
          required: ["productId", "time", "calories"],
          example: {
            exerciseId: "65089cba822834622223fd91",
            time: 6,
            calories: 646,
          },
				},
				SuccessSavingWorkoutInDiary: {
					type: "object",
					properties: {
						_id: { type: "Schema.Types.ObjectId" },
            exerciseId: { type: "Schema.Types.ObjectId" },
            time: { type: "integer" },
						calories: { type: "integer" },
						owner: { type: "Schema.Types.ObjectId" },
						createdAt: { type: "string" },
						updatedAt: { type: "string" },
          },
					example: {
						_id: "650b155e633ef9c0f6487fdb",
            exerciseId: "65089cba822834622223fd91",
            time: 6,
            calories: 646,
						owner: "650acee0e83f22598b0222c1",
						createdAt: "2023-09-23T16:07:57.552Z",
						updatedAt: "2023-09-23T16:07:57.552Z"
					},
				},
				ErrorSavingInDiary: {
				  type: "object",
          properties: {
            message: { type: "string" },
          },
          example: {
            message: "\"{any key}\" is required",
					},
				},
				SuccessDeletingProductFromDiary: {
				  type: "object",
          properties: {
            message: { type: "string" },
          },
          example: {
            message: "product deleted",
					},
				},
				SuccessDeletingWorkoutFromDiary: {
				  type: "object",
          properties: {
            message: { type: "string" },
          },
          example: {
            message: "exercise deleted",
					},
				},
				Error400DeletingFromDiary: {
				  type: "object",
          properties: {
            message: { type: "string" },
          },
          example: {
            message: "{id} is not correct id format",
					},
				},
				Error404DeletingFromDiary: {
				  type: "object",
          properties: {
            message: { type: "string" },
          },
          example: {
            message: "Not found",
					},
				},
// Statistics
				TotalUsers: {
					type: "object",
          properties: {
            totalUsers: { type: "integer" },
          },
          example: {
            totalUsers: 250,
					},
				},
				TotalExercises: {
					type: "object",
          properties: {
            totalExercises: { type: "integer" },
          },
          example: {
            totalExercises: 1325,
					},
				},
				TotalWorkouts: {
					type: "object",
          properties: {
            totalWorkouts: { type: "integer" },
          },
          example: {
            totalWorkouts: 170,
					},
				},
				TotalWorkoutsTime: {
					type: "object",
          properties: {
            totalWorkoutsTime: { type: "integer" },
          },
          example: {
            totalWorkoutsTime: 72,
					},
				},
				TotalBurnedCalories: {
					type: "object",
          properties: {
            totalBurnedCalories: { type: "integer" },
          },
          example: {
            totalBurnedCalories: 24723,
					},
				},
      },
    },
  },
  apis: ["./routes/api/*.js"],
  tags: [
    { name: "Auth", description: "Authentication" },
		{ name: "Users", description: "Operations related to users" },
		{ name: "Diary", description: "Operations related to diary" },
		{ name: "Statistics", description: "Statistics" },
  ],
};

module.exports = swaggerOptions;
