type arrayItem = string | null | undefined | boolean;

export const classNames = (...args: arrayItem[]): string =>
  args.filter((item) => item).join(' ');
