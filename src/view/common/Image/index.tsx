import React from 'react';
import { IImage } from 'src/types/IImage';
import { classNames, imageName } from 'src/utils';

const Image: React.FC<IImage> = ({ src, className }) => {
  return (
    <div className={classNames('image-wrapper', className)}>
      <img src={src} alt={imageName(src)} className="image" />
    </div>
  );
};

export default Image;
