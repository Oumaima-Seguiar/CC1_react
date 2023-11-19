import React from 'react'

export default function Task({txt,delf}) {
  return (
    <div>
      
      <input type="text" readOnly value={txt}  />  <input type="button"  onClick={delf} value="Delete" className='btn' />
    </div>
  )
}
