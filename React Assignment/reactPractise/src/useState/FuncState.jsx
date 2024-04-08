import React, { useState } from 'react'
import { Button } from 'reactstrap';
import feather from 'feather-icons/dist/feather.js';
import { Bluetooth, Plus } from 'react-feather';
export default function FuncState() {
    
    let [count,setCount] = useState(100);
    let [amount,setAmount] = useState({amount:10,number:0});
    const incCount = () => {
        setCount(count + 100)
    }
    const incAmount = () => {
        setAmount({amount : amount.amount + 10})
    }
    return (
        <div>
         <span>Count is {count}</span>
        <Button onClick={()=>incCount()}><Plus/> Count</Button>
        <hr />
         <span>Amount is {amount.amount}</span>
        <Button onClick={()=>incAmount()}><Plus/> Amount</Button>
         hr
         <span>Number is {amount.number}</span>
        <Button onClick={()=>setAmount({amount: amount.amount ,number:  amount.number + 25})}><Plus/> Number</Button>
        <Bluetooth/>
        {/* What to do for  setAmount({number:  amount.number + 25} aavi rite jyare me set karto hato to amount ma value 0 thai geli
            Possibilities - overite that    
        */
        }
      
    </div>
  )
}

