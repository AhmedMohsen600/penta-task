// [1] add a function to create rover and initialize a rover  {x,y,direction}
function createMarsRover(x = 0, y = 0, direction = 'north') {
  const rover = {
    x,
    y,
    direction: direction.toLowerCase(),
  };
  return rover;
}
let marsRover = createMarsRover(4, 2, 'east');

// [2] create function for each movement (movingForward - movingBackward - turnLeft - turnRight)
function movingForward(marsRover) {
  const { x, y, direction } = marsRover;

  const forward = {
    north: { x, y: y + 1, direction },
    south: { x, y: y - 1, direction },
    east: { x: x + 1, y, direction },
    west: { x: x - 1, y, direction },
  };

  return forward[direction];
}

function movingBackward(marsRover) {
  const { x, y, direction } = marsRover;

  const backward = {
    north: { x, y: y - 1, direction },
    south: { x, y: y + 1, direction },
    east: { x: x - 1, y, direction },
    west: { x: x + 1, y, direction },
  };

  return backward[direction];
}

function turnLeft(marsRover) {
  const { x, y, direction } = marsRover;

  const directionMapping = {
    north: 'west',
    south: 'east',
    east: 'north',
    west: 'south',
  };

  const nextDirection = directionMapping[direction];

  return { x, y, direction: nextDirection };
}

function turnRight(marsRover) {
  const { x, y, direction } = marsRover;
  const directionMapping = {
    north: 'east',
    south: 'west',
    east: 'south',
    west: 'north',
  };

  const nextDirection = directionMapping[direction];

  return { x, y, direction: nextDirection };
}

// [3] create executeOneCommand func that calls for each movement depending on the given String
function executeOneCommand(command, rover) {
  const commandMapping = {
    F: () => movingForward(rover),
    B: () => movingBackward(rover),
    L: () => turnLeft(rover),
    R: () => turnRight(rover),
  };

  return commandMapping[command]();
}

// [4] create func to split the space from the string and loop over the string to execute each letter
function executeCommands(command, initialRover) {
  const validCommands = {
    F: executeOneCommand,
    B: executeOneCommand,
    L: executeOneCommand,
    R: executeOneCommand,
  };

  let rover = initialRover;
  const commands = command.split('');

  for (const command of commands) {
    const executeCommand = validCommands[command.toUpperCase()] || (() => {});
    rover = executeCommand(command.toUpperCase(), rover);
  }
  return rover;
}

executeCommands('fff', marsRover);

export {
  createMarsRover,
  executeCommands,
  movingBackward,
  movingForward,
  turnLeft,
  turnRight,
  executeOneCommand,
};
