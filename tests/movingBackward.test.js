import { movingBackward } from '../app';

it('should return the correct object when direction is north and y is greater than 0', () => {
  const marsRover = { x: 0, y: 1, direction: 'north' };
  const expected = { x: 0, y: 0, direction: 'north' };
  expect(movingBackward(marsRover)).toEqual(expected);
});

it('should return the correct object when direction is south and y is less than 9', () => {
  const marsRover = { x: 0, y: 8, direction: 'south' };
  const expected = { x: 0, y: 9, direction: 'south' };
  expect(movingBackward(marsRover)).toEqual(expected);
});

it('should return the correct object when direction is east and x is greater than 0', () => {
  const marsRover = { x: 1, y: 0, direction: 'east' };
  const expected = { x: 0, y: 0, direction: 'east' };
  expect(movingBackward(marsRover)).toEqual(expected);
});

it('should return the correct object when direction is north and y is 0', () => {
  const marsRover = { x: 0, y: 0, direction: 'north' };
  const expected = { x: 0, y: -1, direction: 'north' };
  expect(movingBackward(marsRover)).toEqual(expected);
});
