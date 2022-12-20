import React from "react";
import './style-sheet.css';

export default function Card(props){

  let {name, status, date} = props
  return(
    <div className="card">   
      <div>{name}</div>
      <div>{status}</div>
      <div>{date}</div>
    </div>
    )
} 