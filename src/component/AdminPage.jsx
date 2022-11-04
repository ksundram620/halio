import React from "react";
import { arr } from "./Registration";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Registration";
const AdminPage=()=>{
    const [newarr,setNewarr]=useState([...arr]);
    const [status,setStatus]=useState(false);
    const [updateElement,setUpdateElement]=useState();
    function del(id){
        arr.splice(id,1)
           setNewarr([...arr]) 
            
    }
    function update(ele){
        setStatus(true);
        setUpdateElement(ele);
    }
   
    return(
        <>
        {
            status===true? <Routes><Route path='/' state={updateElement} element={<Register/> }/></Routes> : 
            <>
             <h1>Welocome To admin Page</h1>
             <table border="1px solid Black">
            <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>User-Name</td>
            <td>Address</td>
            <td>Status</td>
            <td>Delete button</td>
            <td>Edit Button</td>
            </tr> 
            
        {newarr.map((ele,id)=>{
            return(
                <>
                     <tr>
            <td>{ele.fname}</td>
            <td>{ele.lname}</td>
            <td>{ele.gender}</td>
            <td>{ele.userName}</td>
            <td>{ele.address}</td>
            <td>{ele.status}</td>
            <td><button onClick={()=>del(id)} >Delete</button></td>
            <td><button onClick={()=>update(ele)}>Edit</button></td>
            </tr> 
                </>
            ) 
        })}
        </table>
            </>

        }

       
       
        </>
    )
}

export default AdminPage;