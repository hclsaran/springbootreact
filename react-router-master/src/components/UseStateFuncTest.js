import React,{useState} from 'react';


let UseStateFuncTest=(props)=>{
    //array destructuring
    const [count,setCount]=  useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    
    return(
        <div>
        <h1>Using usestate functional component</h1>
        <p> Count :{count}
        </p>
        <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseStateFuncTest;