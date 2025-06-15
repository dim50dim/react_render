import { useState } from "react";

export default function Form() {
    const [isSent, setIsSent] = useState(false);
    const [message,setMessage] = useState('Hi!!!');
  
     if(isSent) return <h1> Your message is on its way !!!</h1>

}