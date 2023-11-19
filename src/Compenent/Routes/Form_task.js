import React, { useState } from 'react'
import Task from './Task'
import './form.css'
import {v4 as uuidy4} from 'uuid';
export default function Form_task() {
    const [tasks,settasks]=useState([
        {id:uuidy4(),nom:'HTML,CSS'},
        {id:uuidy4(),nom:'JavaScript'},
        {id:uuidy4(),nom:'React'}
    ])
    




    const [task,setTask]=useState('');
    const addTask=()=>{
      let ntasks=[...tasks];
      let ntask={};
       
     ntask.id=uuidy4();

     ntask.nom=task;

     ntasks.push(ntask);
     settasks(ntasks);
     setTask('');

    }

    const deletetask=(idp)=>{
      alert('Are you sure you want to delete ' +idp + '?');

      let ntasks=tasks.filter((t)=>{
        return t.id!=idp
      })
      settasks(ntasks);
    }


  return (
    <div>
        <center>
      <h1 className='h11'>TO Do List</h1>



      <form  className='form'>
      

 <input className='input' type='text' placeholder='Enter a task ' value={task} onChange={(e)=>{setTask(e.target.value)}}/>
 <input    type='button' onClick={addTask} value="Add" className='btna'/>

      </form>
      <br /><br />
     
        {
            tasks.map((t)=>{


                return <p key={t.id} ><Task delf={()=>deletetask(t.id)} txt={t.nom}  /> </p> 
            })
        }
     
      
  
      </center>

   
    </div>
  ) 
}
