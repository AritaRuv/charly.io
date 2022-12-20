import React from "react";
import './style-sheet.css';

export default function Filters({setStatus, setDate, setName}){

const handleSelectStatus = (e)=>{
    setStatus(e.target.value)
}
const handleSelectName = (e) =>{
    setName(e.target.value)
}
const handleSelectDate = (e) =>{
    setDate(e.target.value)
}

  return(
    <div className="filter">   
        <select onChange={(e)=>{handleSelectStatus(e)}}>          
            <option value=''>Status</option>
            <option value='accepted'>Accepted</option>
            <option value='pending'>Pending</option>
            <option value='declined'>Declined</option>
        </select>
        <select onChange={(e)=>{handleSelectDate(e)}}>          
            <option value=''>Order Date</option>
            <option value='asc'>ASC</option>
        </select>
        <select onChange={(e)=>{handleSelectName(e)}}>          
            <option value=''>Order Name</option>
            <option value='asc'>ASC</option>
        </select>
    </div>
    )
} 