import { memo, useMemo } from 'react';

function Child({ addCountHandler }) {
  console.log('rendered Child');
  const heavyOperation = useMemo(() => {
    let output = 0;
    for (let i = 0; i < 500000000; i++) {
      output++;
    }
    return output;
  }, []);
  // const heavyOperationWithoutMemo = () => {
  //   let output = 0;
  //   for (let i = 0; i < 500000000; i++) {
  //     output++;
  //   }
  //   return output;
  // };
  return (
    <div className='child'>
      <h2>Child Component</h2>
      <p>output : {heavyOperation}</p>
      {/* <p>output : {heavyOperationWithoutMemo()}</p> */}
      <button onClick={addCountHandler}>+1 from Child</button>
    </div>
  );
}

export default memo(Child);
// export default Child;
