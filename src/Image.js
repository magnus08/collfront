import React from 'react';
import {lastImage} from './fetch/urls';

export const Image = function Image() {
  const imgUrl = `${lastImage()}?${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`;
;
  console.log("+++ imgUrl", imgUrl);
  return (
	<>
	    <div class="row">
	      <div class="six wide column">
	        <div className="image">
    	          <img src={lastImage()} alt={"Pi Image"} />
     	        </div>
              </div>
  	  </div>
        </>
  );
};
