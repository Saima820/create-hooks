import React, { useEffect, useState } from 'react'

const Usehook = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{ console.log(count);},[count]);
   
  return ( <>
  <div>Counter = {count}</div>
  <button onClick={()=>setCount(count+1)} >Increement</button>
  <button onClick={()=>setCount(count-1)} >Decreement</button>
  <button onClick={()=>setCount(0)} >Reset</button>
  
  </>
    
    
  )
}

export default Usehook
