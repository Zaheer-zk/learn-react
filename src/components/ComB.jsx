import React from 'react';
import ComC from './ComC';

const ComB = (props) => {
  return (
    <>
      <div>From ComB</div>
      <ComC data={props.data} />
    </>
  );
};

export default ComB;
