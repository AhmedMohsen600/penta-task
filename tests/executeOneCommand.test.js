import { executeOneCommand } from '../app';

it('should return the correct object when given the command "F" and a rover object', () => {
  const rover = { x: 0, y: 0, direction: 'north' };
  const result = executeOneCommand('F', rover);
  expect(result).toEqual({ x: 0, y: 1, direction: 'north' });
});

it('should return the correct object when given the command "B" and a rover object', () => {
  const rover = { x: 0, y: 0, direction: 'north' };
  const result = executeOneCommand('B', rover);
  expect(result).toEqual({ x: 0, y: -1, direction: 'north' });
});

it('should return the correct object when given the command "L" and a rover object', () => {
  const rover = { x: 0, y: 0, direction: 'north' };
  const result = executeOneCommand('L', rover);
  expect(result).toEqual({ x: 0, y: 0, direction: 'west' });
});
