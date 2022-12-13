import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


/*Card component in the main page */
export const Card = (props) => {
const [text,setText]=useState(props.ele.info);

/*To handle the text entry in cards */
const handleOnChange=(e)=>{
  setText(()=>e.target.value)
}


  return (
    <div style={{width:"200px", height:"50px", border:"2px solid black", alignContent:"center", backgroundColor:props.color, borderRadius:"20px",color:"white",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
      <input onChange={handleOnChange} style={{height:"45px",width:"90px", border:"0px solid black", alignItems:"center", backgroundColor:props.color, color:"white",borderRadius:"20px" }} placeholder={text}/>
      <button onClick={props.handleDelete} name={props.color} id={props.ele.id}>X</button>
      <button onClick={props.handleSave} name={props.color} id={props.ele.id} value={text}>✔</button>
    </div>
  )
}
