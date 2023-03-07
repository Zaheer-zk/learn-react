import React from 'react';
import ComB from './ComB';

const ComA = (props) => {
  return (
    <>
      <div>From ComA</div>
      <ComB data={props.data} />
    </>
  );
};

export default ComA;
