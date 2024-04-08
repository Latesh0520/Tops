import React, { useEffect, useState } from 'react'

export default function () {
    const [counter, setCounter] = useState(1)
    const [amount, setAmount] = useState(0)
    useEffect(() => { 
        if(counter % 5 == 0) { 
            alert(`Your Counter Value is ${counter}`)
            setAmount(amount + 1)
        }    
    },[counter]);
    useEffect(() => { 
        if(counter === amount) { 
            alert(`Both Value are same ${counter} & ${amount}`)
        }    
    },[counter,amount]);
  return (
    <div>
        <div>
            <span>{counter}</span>
            <button onClick={()=>{setCounter(counter+1)}}>Add counter</button>
        </div>
        <div>
            <span>{amount}</span>
            <button onClick={()=>{setAmount(amount+10)}}>Add amount</button>
        </div>
    </div>
  )
}
