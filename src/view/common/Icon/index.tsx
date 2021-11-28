import { IIconComponent } from 'src/types/IIcon';
import { classNames } from 'src/utils';
import * as Icons from './components';

const Icon: React.FC<IIconComponent> = ({ icon, className }) => {
  const Icon = Icons[icon];
  return (
    <div className={classNames('icon', className)}>
      <Icon />
    </div>
  );
};

export default Icon;
