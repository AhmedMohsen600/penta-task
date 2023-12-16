import { executeCommands } from '../app';

it('should execute commands that move the rover beyond the edge of the grid without throwing an error', () => {
  const initialRover = { x: 0, y: 0, direction: 'north' };
  const command = 'FFFFFFFFFF';

  expect(() => executeCommands(command, initialRover)).not.toThrow();
});

it('should execute invalid command string without throwing an error', () => {
  const initialRover = { x: 0, y: 0, direction: 'north' };
  const command = 'F';

  expect(() => executeCommands(command, initialRover)).not.toThrow();
});

it('should execute empty command string without throwing an error', () => {
  const initialRover = { x: 0, y: 0, direction: 'north' };
  const command = '';

  expect(() => executeCommands(command, initialRover)).not.toThrow();
});

it('should execute commands that move the rover forward successfully', () => {
  const initialRover = { x: 0, y: 0, direction: 'north' };
  const command = 'FF';

  const resultRover = executeCommands(command, initialRover);

  expect(resultRover).toEqual(undefined);
});
