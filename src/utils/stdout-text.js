export const stdoutText = {
  sayHello: (userName) => `Welcome to the File Manager, ${userName}!`,
  sayGoodbye: (userName) => `Thank you for using File Manager, ${userName}!`,
  sayCurrentlyDirectory: (path) => `You are currently in ${path}`,
  sayInvalidInput: (command) => `Invalid input: ${command}`,
  sayFailed: () => 'Operation failed',
};
