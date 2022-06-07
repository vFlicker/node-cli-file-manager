import { EOL } from 'os';

export const parseChunkToCommand = (chunk) => {
  return chunk.toString().replace(EOL, '');
};
