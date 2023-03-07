import { useState } from 'react';
import './App.css';
import ComA from './components/ComA';
import CreateContext from './components/CreateContext';

function App() {
  //Props dealing will not work properly for long data passing so here we can use context which help to solve props dealing.
  //data -> com1 -> com2 -> com3 prop dealing
  // data -> com 3 using context api

  const [data, setData] = useState('passedData');

  return (
    <div className="App">
      Context API & useContext
      <ComA data={data} />
    </div>
  );
}

export default App;
