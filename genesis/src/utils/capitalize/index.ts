export const capitalize = (str: string) =>
  str
    .toLocaleLowerCase()
    .split(' ')
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
