export const pipe =
  <T>(...fns: Array<(...arg: any) => T>) =>
  (x: T) =>
    fns.reduce((acc, fn) => fn(acc), x);
