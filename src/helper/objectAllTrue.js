export const objectAllTrue = (object) => {
  if (object !== Object(object)) return;

  return Object.keys(object).every((entry) => {
    if (!object[entry]) {
      return false;
    }

    return true;
  });
};
