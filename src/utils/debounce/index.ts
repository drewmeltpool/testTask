export const debounce = <T = unknown, R = void>(
  fn: (arg: T) => R,
  delay: number
) => {
  let timeout: NodeJS.Timeout;

  return (arg: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(arg), delay);
  };
};
