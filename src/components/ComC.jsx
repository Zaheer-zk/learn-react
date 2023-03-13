import React, { useContext } from 'react';
import { AppState } from '../App.js';

const ComC = (props) => {
  //We can also create multiple contextState or we can pass all data in single context state
  const AppData = useContext(AppState);
  return (
    <>
      <div>From ComC</div>
      <p>{`By using props ${props.data}`}</p>
      <p>{`By using context api ${AppData.data}`}</p>
      <p>{`By using context api passes object name : ${AppData.name.name}`}</p>
      <p>{`By using context api passes object data : ${AppData.name.data}`}</p>
    </>
  );
};

export default ComC;
