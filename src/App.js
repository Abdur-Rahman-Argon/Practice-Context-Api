import logo from './logo.svg';
import './App.css';
import ParentsComponents from './components/ParentsComponents/ParentsComponents';
import { useState } from 'react';



function App() {
  const [number, setNumber] = useState(0)

  const incrise =()=>{
    setNumber(number + 1);
  }
  const decrise =()=>{
    setNumber(number - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Reducer Practice</h1>
        <button onClick={incrise}> incrise</button>
         <p>{number}</p>
        <button onClick={decrise}> decrise</button>
        <ParentsComponents></ParentsComponents>
       
      </header>
    </div>
  );
}

export default App;
