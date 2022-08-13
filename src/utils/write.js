const Colors = {
  RED: 31,
  GREEN: 32,
  BLUE: 34,
};

const getColoredText = (text, color) => `\x1B[${color}m${text}\x1B[0m`;

export const WriteFlag = {
  SUCCESS: 'success',
  IMPORTANT: 'important',
  ERROR: 'error',
};

export const write = (text, flag) => {
  switch (flag) {
    case WriteFlag.SUCCESS:
      console.log(getColoredText(text, Colors.GREEN));
      break;
    case WriteFlag.IMPORTANT:
      console.log(getColoredText(text, Colors.BLUE));
      break;
    case WriteFlag.ERROR:
      console.log(getColoredText(text, Colors.RED));
      break;
    default:
      console.log(text);
      break;
  }
};

export const writeInTable = (data) => console.table(data);
