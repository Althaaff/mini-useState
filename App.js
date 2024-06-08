import React, { useState } from "./react";
import { render } from "./react-dom";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(1);  // Pass initial state as 0
  const [count2, setCount2] = useState(10);
  const [name, setName] = useState('Muhammad Althaf');

  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center', userSelect: 'none', cursor: 'pointer' }} onclick={() => {
        console.log('clicked')
        setCount(count + 1)
      }}>{count}</h1>

     <h1 style={{ textAlign: 'center', userSelect: 'none', cursor: 'pointer' }} onclick={() => {
        console.log('clicked')
        setCount2(count2 + 1)
      }}>{count2}</h1>
       <h1 style={{ textAlign: 'center' }}>{name}</h1>

       <div style={{ textAlign: 'center'}}>
         <input 
           type='text'
           onchange={(e) => setName(e.target.value)}
           value={name}
         />
       </div>
    </div>
  );
}
console.log(App())

render(<App />, document.getElementById('root'))
