export const parseStringWithSpaces = (data) => {
  const string = data.join(' ');
  const result = [];
  let current = '';
  let quote = false;

  for (const char of string) {
    if (char === '"') {
      quote = !quote;
    }
    if (char === ' ' && !quote) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result.map((item) => item.replace(/"/g, ''));
};
