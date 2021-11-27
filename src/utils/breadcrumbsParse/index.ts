import { pipe } from 'utils';

export const breadCrumpsParse = pipe(
  (arg) => arg.split('/'),
  (arg) => (arg[arg.length - 1] ? arg : arg.slice(1)),
  (arg) =>
    arg.map((i: string, key: number) => ({
      name: i || 'home',
      path: arg.filter((_: never, idx: number) => idx <= key).join('/') || '/',
    }))
);
