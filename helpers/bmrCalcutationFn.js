const bmrCalculationFn = (
  desiredtWeight,
  height,
  birthday,
  sex,
  levelActivity
) => {
  const activityIndex = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9,
  };

  const sexIndex = {
    male: 5,
    female: -161,
  };

  const birthdayDate = new Date(birthday);

  const age = new Date().getFullYear() - birthdayDate.getFullYear();
  return (
    (10 * desiredtWeight + 6.25 * height - 5 * age + sexIndex[sex]) *
    activityIndex[levelActivity]
  );
};

module.exports = bmrCalculationFn;
