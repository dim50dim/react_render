import { useState } from "react"

export default function Counter() {
  const [number,setNumber] = useState(0);
    
    return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
        setNumber(1 + 1)
        setNumber(1 + 1)
        setNumber(1 + 1)
          }}>Push here</button>
        </>
    )
}