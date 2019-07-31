import React from 'react';
import {lastImage} from './fetch/urls';

export const Image = function Image() {
  const imgUrl = lastImage();
  console.log("+++ imgUrl", imgUrl);
  return (
    <div>
      <img src={lastImage()} alt={"Pi Image"} />
    </div>
  );
};
