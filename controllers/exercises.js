const { Exercise, Filter, } = require('../models/exercise');
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllExercises = async (req, res) => {
    const result = await Exercise.find();
    res.json(result);
};

const getAllBodyParts = async (req, res) => {
    const bodyParts = await Filter.find({filter:"Body parts"});
        res.json(bodyParts);
};

const getAllEquipment = async (req, res) => {
    const equipment = await Filter.find({filter: "Equipment"});
        res.json(equipment);
};

const getAllMuscles = async (req, res) => {
    const muscles = await Filter.find({filter: "Muscles"});
        res.json(muscles);
};

module.exports = {
    getAllExercises: tryCatchWrapper(getAllExercises),
    getAllBodyParts: tryCatchWrapper(getAllBodyParts),
    getAllEquipment: tryCatchWrapper(getAllEquipment),
    getAllMuscles: tryCatchWrapper(getAllMuscles),
};
    