import { createMarsRover } from '../app';

it('should create a rover with default values when no arguments are passed', () => {
  const rover = createMarsRover();
  expect(rover).toEqual({ x: 0, y: 0, direction: 'north' });
});

it('should create a rover with given x, y, and direction', () => {
  const rover = createMarsRover(1, 2, 'N');
  expect(rover).toEqual({ x: 1, y: 2, direction: 'n' });
});

it('should create a rover with direction in lowercase', () => {
  const rover = createMarsRover(1, 2, 'N');
  expect(rover).toEqual({ x: 1, y: 2, direction: 'n' });
});

it('should create a rover with x and y values as 0 when no arguments are passed', () => {
  const rover = createMarsRover();
  expect(rover).toEqual({ x: 0, y: 0, direction: 'north' });
});

it('should be able to create multiple rover objects with different x, y, and direction values', () => {
  const rover1 = createMarsRover(1, 2, 'N');
  const rover2 = createMarsRover(3, 4, 'S');
  expect(rover1).toEqual({ x: 1, y: 2, direction: 'n' });
  expect(rover2).toEqual({ x: 3, y: 4, direction: 's' });
});
