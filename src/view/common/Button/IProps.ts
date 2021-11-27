export interface IButton {
  text?: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  [key: string]: any;
}
