import { useState } from 'react';

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>Site 1</h1>
         <h2>Site 2</h2>
         <h3>Site 3</h3>
         <h4>Site 4</h4>
         <h5>Site 5</h5>
         <h6>Site 6</h6>
         <p onClick={() => setCount((count) => count + 1)}>Count: {count}</p>
      </>
   );
}

export default App;
