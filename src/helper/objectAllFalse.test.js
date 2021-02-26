import { objectAllFalse } from './objectAllFalse';

test('Checks if all values in an object are false', () => {
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

  const testObject3 = {
    stark: true,
    lannister: true,
    targaryen: true,
    baratheon: true
  };

  expect(objectAllFalse(testObject1)).toBe(false);
  expect(objectAllFalse(testObject2)).toEqual(true);
  expect(objectAllFalse(testObject3)).toEqual(false);
});
