import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {


  let [counter, setCounter] = useState(1)
  let [amount, setAmount] = useState(1000)

  function AddOne() {
    
    setCounter(counter + 1)
    setAmount((1000 * counter) + 1000)
    
  }


  function SubtractOne() {
    if(counter > 0){
      setCounter( counter - 1)
    } 

   
  }
  
  function clear() {
    setAmount(0)
    setCounter(0)
  }

 
  return (
    <div>

      <br /><br />
      <section className="flex flex-row w-full">
        <div className=' w-1/4 p-10 text-right'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={SubtractOne}>-1</button>
        </div>
        <div className='bg-blue-500 w-1/4 p-10 text-center'>{amount}</div>
        <div className='bg-blue-300 w-1/4 p-10 text-center'>{counter}</div>
        <div className=' w-1/4 p-10 text-left'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={AddOne}>+1</button>
        </div>


      </section>
      <br />

      <section className="flex flex-row content-between">
        <div className='w-1/3'></div>
        <button className="bg-slate-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
        onClick={clear}>Clear</button> 
        <div className='w-1/3 '></div>
      </section>
  

    </div>
  );
}

export default App;
