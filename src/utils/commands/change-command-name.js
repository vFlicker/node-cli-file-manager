export const changeCommandName = (command, newName) => {
  Object.defineProperty(command, 'name', {
    get: () => newName,
  });
};
