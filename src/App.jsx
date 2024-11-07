import { useState } from 'react';
import './App.css';
import FormAddMoney from './components/FormAddMoney';
import Header from './components/Header';
import MainControl from './components/MainControl';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid
                    ?<MainControl count={count}/>
                    :      <FormAddMoney setCount={setCount} setIsValid={setIsValid}/>


  return (
    <div className="App">
      <Header/>
      {component}
    </div>
  );
}

export default App;
