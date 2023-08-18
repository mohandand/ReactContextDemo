import React, { use, useContext } from 'react';
import MyContext from './MyContext';
export default function Child() {
  const data = useContext(MyContext);
  return <div>{data}</div>;
}
