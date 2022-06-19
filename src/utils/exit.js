import { exit } from 'process';

import { getUserName, write } from '../utils/index.js';

export const closeApp = () => {
  const userName = getUserName();
  write(`Thank you for using File Manager, ${userName}!`);
  exit();
};
