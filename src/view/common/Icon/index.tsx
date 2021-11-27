import { classNames } from 'utils';
import * as Icons from './components';

interface IProps {
  icon: keyof typeof Icons;
  className?: string;
}

const Icon: React.FC<IProps> = ({ icon, className }) => {
  const Icon = Icons[icon];
  return (
    <div className={classNames('icon', className)}>
      <Icon />
    </div>
  );
};

export default Icon;
