import React, { useState } from 'react';


export default function CounterComponent(){

    const [contador, setContador] = useState(0);

    const handleClickInc=()=>{
        setContador(contador + 1);
    }

    const handleClickDec = () => {
        setContador(contador - 1);
    };
    
    
    return (
        <>
            <h4>Counter</h4>
            <p>{contador}</p>
            <button onClick={handleClickInc}>+</button>
            <button onClick={handleClickDec}>-</button>
        </>
    )
};