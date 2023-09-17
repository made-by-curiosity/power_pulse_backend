const { Filters } = require('../models/filter');
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllBodyParts = async (req, res) => {
    const bodyParts = await Filters.find({filter:"Body parts"});
        res.json(bodyParts);
};

const getAllEquipment = async (req, res) => {
    const equipment = await Filters.find({filter: "Equipment"});
        res.json(equipment);
};

const getAllMuscles = async (req, res) => {
    const muscles = await Filters.find({filter: "Muscles"});
        res.json(muscles);
};

module.exports = {
    getAllBodyParts: tryCatchWrapper(getAllBodyParts),
    getAllEquipment: tryCatchWrapper(getAllEquipment),
    getAllMuscles: tryCatchWrapper(getAllMuscles),
};
    