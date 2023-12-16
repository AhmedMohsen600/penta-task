import { movingForward } from '../app';

it('should return the correct new position when facing north', () => {
  const marsRover = { x: 0, y: 0, direction: 'north' };
  const expected = { x: 0, y: 1, direction: 'north' };
  const result = movingForward(marsRover);
  expect(result).toEqual(expected);
});

it('should return the correct new position when facing south', () => {
  const marsRover = { x: 0, y: 0, direction: 'south' };
  const expected = { x: 0, y: -1, direction: 'south' };
  const result = movingForward(marsRover);
  expect(result).toEqual(expected);
});

it('should return the correct new position when facing east', () => {
  const marsRover = { x: 0, y: 0, direction: 'east' };
  const expected = { x: 1, y: 0, direction: 'east' };
  const result = movingForward(marsRover);
  expect(result).toEqual(expected);
});
