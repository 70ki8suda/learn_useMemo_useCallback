import { useState, useCallback } from 'react';

import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [inputState, setInputState] = useState('');
  const addCountHandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  // const addCountHandler = () => {
  //   setCount(count + 1);
  // };
  return (
    <div className='App'>
      <div>Count: {count}</div>
      <input type='text' onChange={(e) => setInputState(e.target.value)} />

      <Child addCountHandler={addCountHandler} />
    </div>
  );
}

export default App;
