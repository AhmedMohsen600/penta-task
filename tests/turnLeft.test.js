import { turnLeft } from '../app';

it('should return a new object with the same x and y values and a new direction of west when given a marsRover object with direction of north', () => {
  const marsRover = { x: 0, y: 0, direction: 'north' };
  const expected = { x: 0, y: 0, direction: 'west' };

  const result = turnLeft(marsRover);

  expect(result).toEqual(expected);
});

it('should return a new object with the same x and y values and a new direction of east when given a marsRover object with direction of south', () => {
  const marsRover = { x: 0, y: 0, direction: 'south' };
  const expected = { x: 0, y: 0, direction: 'east' };

  const result = turnLeft(marsRover);

  expect(result).toEqual(expected);
});

it('should return a new object with the same x and y values and a new direction of north when given a marsRover object with direction of east', () => {
  const marsRover = { x: 0, y: 0, direction: 'east' };
  const expected = { x: 0, y: 0, direction: 'north' };

  const result = turnLeft(marsRover);

  expect(result).toEqual(expected);
});
