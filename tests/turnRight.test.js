import { turnRight } from '../app';

it('should return a new object with direction "east" when the input direction is "north"', () => {
  const marsRover = { x: 0, y: 0, direction: 'north' };
  const expected = { x: 0, y: 0, direction: 'east' };
  const result = turnRight(marsRover);
  expect(result).toEqual(expected);
});

it('should return a new object with direction "south" when the input direction is "east"', () => {
  const marsRover = { x: 0, y: 0, direction: 'east' };
  const expected = { x: 0, y: 0, direction: 'south' };
  const result = turnRight(marsRover);
  expect(result).toEqual(expected);
});
