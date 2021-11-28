import React from 'react';
import { classNames, imageName } from 'src/utils';
import './image.scss';

interface IImage {
  src: string;
  className?: string;
}

const Image: React.FC<IImage> = ({ src, className }) => {
  return (
    <div className={classNames('image-wrapper', className)}>
      <img src={src} alt={imageName(src)} className="image" />
    </div>
  );
};

export default Image;
