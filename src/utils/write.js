const Colors = {
  RED: 31,
  GREEN: 32,
  BLUE: 34,
};

const getColoredText = (text, color) => {
  return `\x1B[${color}m${text}\x1B[0m`;
};

export const write = (text, flag) => {
  switch (flag) {
    case 'success':
      console.log(getColoredText(text, Colors.GREEN));
      break;
    case 'important':
      console.log(getColoredText(text, Colors.BLUE));
      break;
    case 'error':
      console.log(getColoredText(text, Colors.RED));
      break;
    default:
      console.log(text);
      break;
  }
};

export const writeInTable = (data) => {
  console.table(data);
};
