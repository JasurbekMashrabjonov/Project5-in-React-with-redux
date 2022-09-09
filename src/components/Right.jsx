import React, { useState } from 'react';
import "../styles/Right.css"
function Right(props) {
    const [class2,setClass2] = useState('')
    return (
        <>
            <div className={`right_context ${class2} `}>
            <button className='btn btn3' onClick={()=>setClass2('class2')}>-</button>
            </div>
        </>
    );
}

export default Right;