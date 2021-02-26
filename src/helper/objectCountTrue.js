export const objectCountTrue = (object) => {
  if (object !== Object(object)) return;

  let count = 0;

  Object.keys(object).forEach((entry) => {
    if (object[entry]) {
      count += 1;
    }
  });

  return count;
};
