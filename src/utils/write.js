const Colors = {
  RED: 31,
  GREEN: 32,
};

const getColoredText = (text, color) => {
  return `\x1B[${color}m${text}\x1B[0m`;
};

export const write = (text, flag) => {
  switch (flag) {
    case 'success':
      console.log(getColoredText(text, Colors.GREEN));
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
