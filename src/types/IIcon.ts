import * as Icons from 'src/view/common/Icon/components';

export interface IIcon {
  fill?: string;
}

export interface IIconComponent {
  icon: keyof typeof Icons;
  className?: string;
}
