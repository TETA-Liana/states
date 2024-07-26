import React ,{useRef} from 'react';

const RefTest=() =>{
    const myRef = useRef(null);
    const handleClick=()=>{
        myRef.current.style.backgroundColor="blue";
        myRef.curent.backgroundColor();
    };
    return(
        <div>
            <input ref={myRef} type="text"/>
            <button onClick={handleClick}>Focus Input</button> 
        </div>
    );
};
export default RefTest;