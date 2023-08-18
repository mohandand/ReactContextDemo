import * as React from 'react';
import './style.css';
import MyContext from './MyContext';
import Child from './Child';

export default function App() {
  const data = 'Hello';
  return (
    <MyContext.Provider value={data}>
      <Child />
    </MyContext.Provider>
  );
}
