const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXY0123456789';

const randInt = (min: number, max: number) =>
  ~~(Math.random() * (max - min) + min);

const randStr = (strLen: number) =>
  new Array(strLen)
    .fill(0)
    .map(() => CHARS[randInt(0, CHARS.length)])
    .join('');

export default randStr;
