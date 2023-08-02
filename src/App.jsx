import React, { useState } from 'react';



const App = () =>{
  let time = new Date().toLocaleTimeString();

const [ctime , setCtime] = useState(time);  

  const Update =()=>{
    let time = new Date().toLocaleTimeString();
       setCtime(time);
  };
  setInterval(Update,1000)
  return(
    <>
      <h1>{time}</h1>
    </>
  )
}
export default App;