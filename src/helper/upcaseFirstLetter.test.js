import { upcaseFirstLetter } from './upcaseFirstLetter';

test('upcases first letter of string', () => {
  expect(upcaseFirstLetter('harry')).toBe('Harry');
  expect(upcaseFirstLetter('potter')).toBe('Potter');
  expect(upcaseFirstLetter('_potter')).toBe('_potter');
});
