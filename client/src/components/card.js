import React from "react";

export default function Card(props){

  let {name, status, date} = props
  return(
    <div>   
      <div>{name}</div>
      <div>{status}</div>
      <div>{date}</div>
    </div>
    )
} 