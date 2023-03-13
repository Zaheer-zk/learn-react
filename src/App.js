import { createContext, useState } from 'react';
import './App.css';
import ComA from './components/ComA';

const AppState = createContext();

function App() {
  //Props dealing will not work properly for long data passing so here we can use context which help to solve props dealing.
  //data -> com1 -> com2 -> com3 prop dealing
  // data -> com 3 using context api

  const [data, setData] = useState('passedData');
  const [name, setName] = useState({ name: 'Zaheer', data: data });

  return (
    <>
      {/* By using context api */}
      <AppState.Provider value={{ data, name }}>
        <div className="App">
          Context API & useContext
          <ComA data={data} />
        </div>
      </AppState.Provider>
    </>
  );
}

export default App;
export { AppState };
