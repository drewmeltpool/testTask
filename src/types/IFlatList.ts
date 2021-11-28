type IFlatItem = {
  tag?: keyof JSX.IntrinsicElements | React.ExoticComponent;
  className?: string;
  [key: string]: any;
};

export interface IFlatList {
  data: Array<any>;
  component: <T>(props: T | any) => React.ReactNode;
  setKey?: <T>(props: T | any) => string | number;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  itemProps?: IFlatItem;
  [key: string]: any;
}
