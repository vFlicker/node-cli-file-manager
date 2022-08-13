import { chdir, cwd } from 'process';
import { homedir } from 'os';

export const HOME_DIR = homedir();

export const changeDir = (path) => chdir(path);

export const getWorkingDirectory = () => cwd();

export const setHomeDir = () => changeDir(HOME_DIR);
