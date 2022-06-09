import { chdir } from 'process';
import { homedir } from 'os';

export const HOME_DIR = homedir();

export const changeDir = (path) => {
  chdir(path);
};

export const getWorkingDirectory = () => process.cwd();

export const setHomeDir = () => {
  changeDir(HOME_DIR);
};
