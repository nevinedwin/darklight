import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {

  const [dark, setDark] = useState(false)


  const handleClick = () => {
    setDark(preVal => !preVal)
  }


  return (
    <div className="App">
      <Header dark={dark} click={handleClick} />
      <Main dark={dark} />
    </div>
  );
}

export default App;
