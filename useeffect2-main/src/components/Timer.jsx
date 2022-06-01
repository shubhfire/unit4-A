import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Timer() {
    const [timer,setTimer]= useState(0)
 useEffect(()=>{
// **********************
   const id = setInterval(()=>{
       if(timer+1 > 10)
       {

       }else{
           setTimer(timer + 1)
       }
},1000)

   return ()=>{
    clearInterval(id)
}
 },[timer])
// ****************
  return (
    <div>CountDown: {timer}
    
    <button onClick={()=>setTimer((timer)=>timer+1)}>Increse</button>
    <button onClick={()=>setTimer((timer)=>timer-1)}>Decrese</button>
    
     </div>
  )
}
