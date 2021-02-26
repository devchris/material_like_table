import { objectAllTrue } from './objectAllTrue';

test('Checks if all values in an object are true', () => {
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

  expect(objectAllTrue(testObject1)).toBe(false);
  expect(objectAllTrue(testObject2)).toEqual(false);
  expect(objectAllTrue(testObject3)).toEqual(true);
});
