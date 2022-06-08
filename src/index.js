import { homedir } from 'os';

import { app } from './app.js';

// INIT
process.chdir(homedir());
app(process.argv);
