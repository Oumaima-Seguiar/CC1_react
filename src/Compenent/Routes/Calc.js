
import React, { useState } from 'react'
import './calc.css'

export default function Tp1_Calc() {

const [exp,setExp]=useState('');

const clear=()=>{

 setExp('');
}

const result=()=>{
  try {
  let v=exp;
    setExp(eval(v));
    
   }
  catch(error){
    setExp('expression non valide')
  }
}
const tapecar=(e)=>{


let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}

  return (
    <div className='clc'>
          <input value={exp} type="text" class='text'  />
          <input onClick={clear} type="button" value="C" id='cc' class='button'/>
           <br />
            <input onClick={(e)=>tapecar(e)} type="button" value="1" class='button' />
            <input onClick={(e)=>tapecar(e)} type="button" value="2"class='button' />
            <input onClick={(e)=>tapecar(e)} type="button" value="3" class='button'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="+"class='button' id='sm'/>
<br />
            <input onClick={(e)=>tapecar(e)} type="button" value="4"class='button' />
            <input onClick={(e)=>tapecar(e)} type="button" value="5" class='button'/> 
            <input onClick={(e)=>tapecar(e)} type="button" value="6" class='button'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="-" class='button' id='sm'/>
<br />
            <input onClick={(e)=>tapecar(e)} type="button" value="7" class='button'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="8" class='button'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="9" class='button'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="*" class='button' id='sm'/>
          <br />
            <input onClick={(e)=>tapecar(e)} type="button" value="." class='button'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="0" class='button'/>
            <input onClick={result} type="button" value="=" class='button'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="/" class='button' id='sm'/>
            
          
      
     
    </div>
  )
}
