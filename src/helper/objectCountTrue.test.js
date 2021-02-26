import { objectCountTrue } from './objectCountTrue';

test('Counts how many values in an object are true', () => {
  const testObject1 = {
    stark: true,
    lannister: false,
    targaryen: true,
    baratheon: true
  };

  const testObject2 = {
    stark: false,
    lannister: false,
    targaryen: false,
    baratheon: false
  };

  expect(objectCountTrue(testObject1)).toEqual(3);
  expect(objectCountTrue(testObject2)).toEqual(0);
  expect(objectCountTrue(null)).toEqual(undefined);
  expect(objectCountTrue('')).toEqual(undefined);
  expect(objectCountTrue([])).toEqual(0);
});
