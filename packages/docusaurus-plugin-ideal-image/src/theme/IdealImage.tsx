/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {ImageProps} from '../types';
import IdealImage from '@endiliey/react-ideal-image';

const Image: React.FC<ImageProps> = props => {
  const {alt, className, img} = props;
  return (
    <IdealImage
      {...props}
      alt={alt}
      className={className}
      height={img.src.height || 100}
      width={img.src.width || 100}
      placeholder={{lqip: img.preSrc}}
      src={img.src.src}
      srcSet={img.src.images.map((image: any) => ({
        ...image,
        src: image.path,
      }))}
    />
  );
};

export default Image;
